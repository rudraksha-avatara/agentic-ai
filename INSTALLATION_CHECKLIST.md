# ✅ WikiAgent Installation Checklist

Use this checklist to ensure everything is set up correctly.

## Pre-Installation

- [ ] **Node.js installed** (v18 or higher)
  - Run: `node --version`
  - Should show: v18.x.x or higher
  
- [ ] **npm installed** (v9 or higher)
  - Run: `npm --version`
  - Should show: 9.x.x or higher

- [ ] **NVIDIA API Key obtained**
  - Visit: https://build.nvidia.com/
  - Sign up and generate API key
  - Key saved somewhere safe

## Installation Steps

- [ ] **Project files extracted/downloaded**
  - All files present in folder
  - Can see package.json file

- [ ] **Terminal/Command Prompt opened**
  - Navigated to project folder
  - Run: `cd path/to/adkagent-more-broken`

- [ ] **Dependencies installed**
  - Run: `npm install`
  - No error messages
  - node_modules folder created

- [ ] **Environment variables configured**
  - `.env` file exists in project root
  - NVIDIA_API_KEY added (no quotes needed)
  - No extra spaces before or after the key

## Testing

- [ ] **Development server started**
  - Run: `npm run dev`
  - See "Ready in X.Xs" message
  - No error messages in terminal

- [ ] **Application accessible in browser**
  - Open: http://localhost:3000
  - WikiAgent interface loads
  - No error messages on screen

- [ ] **Chat functionality works**
  - Can type in the input box
  - Send button is clickable
  - Test question: "What is AI?"

- [ ] **AI responses working**
  - Question gets processed
  - Answer appears in chat
  - Wikipedia sources shown

## Verification

- [ ] **No console errors**
  - Press F12 in browser
  - Check Console tab
  - No red error messages

- [ ] **API key working**
  - Responses are generated
  - Not getting "API key invalid" errors

- [ ] **Wikipedia search working**
  - Sources appear below answers
  - Links are clickable
  - Open to Wikipedia pages

## Common Issues Resolved

- [ ] If port 3000 busy: Used `npm run dev -- -p 3001`
- [ ] If modules missing: Ran `npm install` again
- [ ] If .env not working: Restarted dev server
- [ ] If cache issues: Deleted .next folder

## Final Checks

- [ ] **Can ask multiple questions**
  - Try 3-4 different questions
  - All get proper responses

- [ ] **Sources are accurate**
  - Wikipedia links work
  - Links match the answer content

- [ ] **UI is responsive**
  - Chat scrolls properly
  - Input box works smoothly
  - Send button responds

## Ready for Demo/Submission

- [ ] **Application runs smoothly**
- [ ] **No errors in console**
- [ ] **Responses are accurate**
- [ ] **UI looks good**
- [ ] **All features working**

---

## If All Boxes Checked: ✅ YOU'RE READY!

## If Issues Remain: 📖 Check These Files

1. **QUICK_START.txt** - Simple step-by-step guide
2. **SETUP_GUIDE.md** - Detailed installation instructions
3. **DEPENDENCIES.md** - Complete dependency list
4. **README.md** - Project overview

---

## Emergency Troubleshooting

### Nuclear Option (Start Fresh)
```bash
# Delete everything and reinstall
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

### Check Everything
```bash
# Verify Node.js
node --version

# Verify npm
npm --version

# List installed packages
npm list --depth=0

# Check for issues
npm audit
```

---

**Last Updated:** February 2026

**Need Help?** Check the troubleshooting section in SETUP_GUIDE.md
