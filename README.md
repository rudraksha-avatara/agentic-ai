Here is a **clean, simple, professional version** of your project README so you can easily explain it in demo, viva, or hackathon judging 👇

---

# 🤖 **WikiAgent – AI-Powered Wikipedia Assistant**

**WikiAgent** is a smart chatbot that answers questions using **Wikipedia** and **NVIDIA Llama AI**.

It searches Wikipedia, understands the information with AI, and gives clear answers with source links.

---

## ✨ **Main Features**

* 🔍 **Smart Wikipedia Search**
  Automatically finds relevant articles

* 🤖 **AI-Generated Answers**
  Uses NVIDIA **Llama 3.1 8B** model

* 📚 **Source Links**
  Shows Wikipedia links for fact checking

* 💬 **Chat Interface**
  Simple and clean chat UI

* ⚡ **Fast Performance**
  Built using Next.js 15 + React 19

*(Since you are a web platform optimizer, Jaydatt, this stack is lightweight and SEO-friendly for projects like The Blaze Times tools section too.)*

---

# 🚀 **Quick Start Guide**

Follow these steps to run the project.

---

### ✅ **1. Install Dependencies**

```bash id="install1"
npm install
```

---

### ✅ **2. Add NVIDIA API Key**

Create `.env` file:

```env id="env1"
NVIDIA_API_KEY=your_api_key_here
NVIDIA_API_URL=https://integrate.api.nvidia.com/v1/chat/completions
NVIDIA_MODEL=meta/llama-3.1-8b-instruct
```

👉 Get free key from [https://build.nvidia.com/](https://build.nvidia.com/)

---

### ✅ **3. Run the App**

```bash id="run1"
npm run dev
```

---

### ✅ **4. Open Browser**

```
http://localhost:3000
```

---

# 🎯 **How WikiAgent Works**

1. User asks a question
2. App searches Wikipedia
3. NVIDIA AI reads the data
4. AI generates answer
5. Sources are shown

👉 Simple + accurate answers.

---

# 🛠️ **Technology Used**

* **Framework:** Next.js 15
* **UI Library:** React 19
* **Styling:** Tailwind CSS
* **AI Model:** NVIDIA Llama 3.1 8B
* **Data Source:** Wikipedia API
* **Components:** Radix UI

---

# 📦 **Project Structure**

```
src/
 ├── app/          → Pages
 ├── components/   → Chat UI
 ├── ai/           → AI logic
 └── lib/          → Utilities
.env               → API keys
package.json       → Dependencies
```

---

# ⚙️ **Available Commands**

```bash id="cmd1"
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production server
npm run genkit:dev   # AI development tools
```

---

# 📝 **System Requirements**

* Node.js 18+
* npm or yarn
* NVIDIA API key
* Internet connection

---

# 🐛 **Troubleshooting**

### Port already used

```bash id="fix1"
npm run dev -- -p 3001
```

### Dependency errors

```bash id="fix2"
rm -rf node_modules .next
npm install
```

### API not working

* Check `.env` key
* Restart server
* Verify key on NVIDIA website

---

# 🎓 **Simple Explanation (For Judges)**

👉 WikiAgent is like a smart assistant that:

* Searches Wikipedia
* Understands information using AI
* Gives simple answers with sources

So users get fast and reliable knowledge.

---

# 🎉 **Final Result**

✅ Fully working AI chatbot
✅ Accurate answers with sources
✅ Ready for hackathon demo
