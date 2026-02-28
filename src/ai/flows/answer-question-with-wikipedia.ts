'use server';

import { z } from 'zod';

const WikipediaSearchToolInputSchema = z.object({
  query: z.string().describe('The search query for Wikipedia.'),
});

const WikipediaSearchResultSchema = z.object({
  title: z.string().describe('The title of the Wikipedia page.'),
  extract: z.string().describe('A summary or extract of the Wikipedia page content.'),
  url: z.string().url().describe('The URL of the Wikipedia page.'),
});

const WikipediaSearchToolOutputSchema = z.array(WikipediaSearchResultSchema).describe('An array of relevant Wikipedia articles.');

async function wikipediaSearch(query: string) {
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${encodeURIComponent(query)}&srlimit=3`;

  try {
    const searchResponse = await fetch(searchUrl);
    const searchData: any = await searchResponse.json();

    if (!searchData || !searchData.query || !searchData.query.search || searchData.query.search.length === 0) {
      return [];
    }

    const searchResults = searchData.query.search;
    const results: z.infer<typeof WikipediaSearchToolOutputSchema> = [];

    for (const result of searchResults) {
      const title = result.title;
      const pageUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;

      const extractUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=${encodeURIComponent(title)}&format=json&explaintext`;
      const extractResponse = await fetch(extractUrl);
      const extractData: any = await extractResponse.json();

      let extract = '';
      if (extractData && extractData.query && extractData.query.pages) {
        const pageId = Object.keys(extractData.query.pages)[0];
        extract = extractData.query.pages[pageId].extract || '';
      }

      results.push({
        title,
        extract,
        url: pageUrl,
      });
    }
    return results;
  } catch (error) {
    console.error('Error fetching from Wikipedia:', error);
    return [];
  }
}

const AnswerQuestionWithWikipediaInputSchema = z.object({
  question: z.string().describe('The user question to answer using Wikipedia.'),
});

export type AnswerQuestionWithWikipediaInput = z.infer<typeof AnswerQuestionWithWikipediaInputSchema>;

const AnswerQuestionWithWikipediaOutputSchema = z.object({
  answer: z.string().describe('The answer text generated from Wikipedia sources.'),
  sources: z.array(z.string()).describe('Source URLs from Wikipedia used to generate the answer.'),
});

export type AnswerQuestionWithWikipediaOutput = z.infer<typeof AnswerQuestionWithWikipediaOutputSchema>;

export async function answerQuestionWithWikipedia(input: AnswerQuestionWithWikipediaInput): Promise<AnswerQuestionWithWikipediaOutput> {
  // Search Wikipedia for relevant articles
  const searchResults = await wikipediaSearch(input.question);
  
  if (!searchResults || searchResults.length === 0) {
    return {
      answer: "I couldn't find any relevant information on Wikipedia for your question.",
      sources: [],
    };
  }

  // Prepare context from Wikipedia articles
  const context = searchResults
    .map((result, idx) => `[${idx + 1}] ${result.title}\n${result.extract.substring(0, 500)}...`)
    .join('\n\n');

  // Generate answer using NVIDIA API
  const prompt = `You are a helpful assistant that answers questions using Wikipedia information.

User question: ${input.question}

Wikipedia articles found:
${context}

Please provide a comprehensive and accurate answer to the user's question based on the Wikipedia articles above. Be concise but informative.`;

  try {
    const response = await fetch(process.env.NVIDIA_API_URL!, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NVIDIA_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.NVIDIA_MODEL || 'meta/llama-3.1-8b-instruct',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${response.statusText}`);
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || 'Unable to generate an answer.';

    return {
      answer: answer,
      sources: searchResults.map(r => r.url),
    };
  } catch (error) {
    console.error('Error generating answer:', error);
    
    // Fallback: return a summary of the Wikipedia articles
    const fallbackAnswer = searchResults
      .map((result, idx) => `**${result.title}**: ${result.extract.substring(0, 300)}...`)
      .join('\n\n');
    
    return {
      answer: fallbackAnswer || "I found some information but couldn't generate a proper answer.",
      sources: searchResults.map(r => r.url),
    };
  }
}
