# 📦 **WikiAgent – Complete Dependencies List (Simple Version)**

This document explains all the software and packages needed to run the **WikiAgent project**.

---

## ✅ **1. System Requirements**

These are the basic tools needed before running the project.

### **Required Software**

1. **Node.js (v18 or higher)**
   👉 Used to run the project
   👉 Comes with npm

2. **npm (v9 or higher)**
   👉 Used to install packages

---

### **Optional Software**

* **Git** → For version control
* **VS Code** → Recommended editor

*(Since you use VS Code and work on Cloudflare Workers and shared hosting, Jaydatt, this setup will run smoothly on your system too.)*

---

# 📦 **2. Main Project Dependencies**

These packages make the app work.

---

## 🔹 **Core Framework**

Used to build the website.

* **Next.js** → Main web framework
* **React** → UI library
* **React-DOM** → Connect React to browser

👉 These create the main website structure.

---

## 🔹 **AI & API Packages**

Used to generate answers.

* **Genkit** → AI workflow manager
* **OpenAI / Google GenAI support** → AI model integration
* **Zod** → Data validation

👉 These connect the app to AI services.

---

## 🔹 **UI Components**

Used for buttons, forms, and layout.

* Radix UI components
* Lucide icons

👉 These make the interface look professional.

---

## 🔹 **Styling Packages**

Used for design.

* TailwindCSS → Main styling
* Autoprefixer + PostCSS → CSS support
* clsx + tailwind-merge → Style helpers

👉 These make the app responsive and modern.

---

## 🔹 **Forms & Utilities**

Used for user input and helper functions.

* React Hook Form → Form handling
* Date-Fns → Date tools
* dotenv → Environment variables

👉 These help manage user input and configuration.

---

## 🔹 **Other Packages**

Extra features.

* Firebase → Storage / Database
* Recharts → Charts
* Embla Carousel → Sliders

👉 Used for advanced features.

---

# 🧪 **3. Developer Dependencies**

Used only during development.

* TypeScript → Type checking
* Genkit CLI → AI testing tools
* @types packages → Code suggestions

👉 These help developers write safer code.

---

# 🔐 **4. Environment Variables**

Create a `.env` file with:

```
NVIDIA_API_KEY=your_api_key
NVIDIA_API_URL=https://integrate.api.nvidia.com/v1/chat/completions
NVIDIA_MODEL=meta/llama-3.1-8b-instruct
```

👉 This connects the app to NVIDIA AI.

*(Tip for you, Jaydatt: since you deploy on shared hosting sometimes, never upload `.env` to GitHub.)*

---

# ⚙️ **5. Installation Steps**

### Install Everything

```bash
npm install
```

### Update Packages

```bash
npm update
```

### Check Installed Packages

```bash
npm list --depth=0
```

---

# 🌐 **6. APIs Used**

### **NVIDIA API**

* Used for AI answers
* Requires API key

### **Wikipedia API**

* Used for article search
* Free, no key needed

---

# 📊 **7. Size & Performance**

* Total packages → ~900
* Installation size → ~400-500 MB
* Install time → 2-5 minutes

---

# 🌍 **8. Browser Support**

Works on:

* Chrome
* Firefox
* Safari
* Edge

---

# 🛠️ **9. Troubleshooting**

### If install fails

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Fix dependency errors

```bash
npm install --legacy-peer-deps
```

---

# 🚀 **10. For Production Deployment**

You may need:

* Node.js runtime
* PM2 process manager
* Nginx or Apache
* SSL certificate

*(Since you already use Cloudflare Workers and jsDelivr CDN, this app can also be optimized easily.)*

---

# 🎯 **Simple Explanation (For Non-Technical People)**

* **Dependencies = Ingredients**
* **Node.js = Kitchen**
* **npm = Shopping system**
* **API Keys = Password to AI service**

Without these, the app cannot run.

---

# 🎉 **Final Result**

👉 All required dependencies listed
👉 Easy installation
👉 Project ready to run