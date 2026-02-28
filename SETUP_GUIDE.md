# WikiAgent - Complete Setup Guide

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your system:

### Required Software

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (optional, for cloning)
   - Download from: https://git-scm.com/

### Required API Key

- **NVIDIA API Key** (Free)
  - Get it from: https://build.nvidia.com/
  - Sign up and generate an API key
  - The key will look like: `nvapi-xxxxxxxxxxxxx`

---

## 🚀 Installation Steps

### Step 1: Extract/Clone the Project

If you received a ZIP file:
```bash
# Extract the ZIP file to a folder
# Open terminal/command prompt in that folder
cd adkagent-more-broken
```

If using Git:
```bash
git clone <repository-url>
cd adkagent-more-broken
```

### Step 2: Install Dependencies

Run this command in the project folder:

```bash
npm install
```

This will install all required packages:
- Next.js 15.5.9
- React 19.2.1
- Tailwind CSS
- Radix UI components
- Genkit AI framework
- And all other dependencies

**Note:** Installation may take 2-5 minutes depending on your internet speed.

### Step 3: Configure Environment Variables

1. Open the `.env` file in the project root
2. Replace `your_api_key_here` with your actual NVIDIA API key:

```env
NVIDIA_API_KEY=nvapi-YOUR_ACTUAL_KEY_HERE
NVIDIA_API_URL=https://integrate.api.nvidia.com/v1/chat/completions
NVIDIA_MODEL=meta/llama-3.1-8b-instruct
```

**Example:**
```env
NVIDIA_API_KEY=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
NVIDIA_API_URL=https://integrate.api.nvidia.com/v1/chat/completions
NVIDIA_MODEL=meta/llama-3.1-8b-instruct
```

### Step 4: Run the Application

Start the development server:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 15.5.9
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.3s
```

### Step 5: Open in Browser

Open your web browser and go to:
```
http://localhost:3000
```

You should see the WikiAgent interface!

---

## 🎯 How to Use

1. Type your question in the text box at the bottom
2. Press Enter or click the Send button
3. Wait for the AI to search Wikipedia and generate an answer
4. View the answer with Wikipedia source links

**Example Questions:**
- "What is artificial intelligence?"
- "Tell me about the Eiffel Tower"
- "Who invented the telephone?"
- "What is quantum computing?"

---

## 🛠️ Troubleshooting

### Problem: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Problem: Port 3000 is already in use

**Solution:**
```bash
# Run on a different port
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Problem: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

On Windows:
```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Problem: API key not working

**Solution:**
1. Check if the API key is correct in `.env` file
2. Make sure there are no extra spaces
3. Verify the key is active at https://build.nvidia.com/
4. Restart the development server after changing `.env`

### Problem: Build errors

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Restart the server
npm run dev
```

On Windows:
```bash
rmdir /s /q .next
npm run dev
```

---

## 📦 Project Structure

```
adkagent-more-broken/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Main page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── wiki-agent/        # Chat components
│   │   └── ui/                # UI components
│   ├── ai/                    # AI logic
│   │   ├── genkit.ts          # Genkit configuration
│   │   └── flows/             # AI flows
│   └── lib/                   # Utility functions
├── .env                       # Environment variables (API keys)
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
└── next.config.ts             # Next.js configuration
```

---

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run Genkit development tools
npm run genkit:dev
```

---

## 📝 System Requirements

### Minimum Requirements:
- **OS:** Windows 10/11, macOS 10.15+, or Linux
- **RAM:** 4 GB
- **Disk Space:** 500 MB for dependencies
- **Internet:** Required for API calls and Wikipedia

### Recommended:
- **RAM:** 8 GB or more
- **Internet:** Stable broadband connection

---

## 🌐 Technologies Used

- **Frontend:** Next.js 15, React 19, Tailwind CSS
- **AI:** NVIDIA API (Llama 3.1 8B model)
- **Data Source:** Wikipedia API
- **UI Components:** Radix UI, Lucide Icons
- **Styling:** Tailwind CSS with custom theme

---

## 🆘 Getting Help

If you encounter any issues:

1. Check the troubleshooting section above
2. Make sure all prerequisites are installed
3. Verify your NVIDIA API key is valid
4. Check the terminal for error messages
5. Try restarting the development server

---

## 📄 License

This project is for educational and hackathon purposes.

---

## ✅ Quick Start Checklist

- [ ] Node.js installed (v18+)
- [ ] Project files extracted/cloned
- [ ] Ran `npm install`
- [ ] NVIDIA API key added to `.env`
- [ ] Ran `npm run dev`
- [ ] Opened http://localhost:3000
- [ ] Tested with a question

---

**🎉 You're all set! Enjoy using WikiAgent!**
