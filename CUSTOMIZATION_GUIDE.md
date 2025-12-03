# 📝 Customization Guide - Where to Put Your Information

This guide shows you exactly where to update all your personal information in the portfolio.

## 🎯 Main Files to Edit

All your personal information is stored in **translation files** so it works in both English and French.

### 1️⃣ Hero Section (Name, Title, Description)

**File:** `src/locales/en.json` and `src/locales/fr.json`

**Lines to edit:**

```json
"hero": {
  "name": "Hrida Zakaria",           // ← YOUR NAME (already updated!)
  "title": "Full Stack Developer",    // ← YOUR JOB TITLE
  "description": "I create beautiful...", // ← YOUR SHORT INTRO
}
```

**Update in BOTH files:**
- `src/locales/en.json` (line 13)
- `src/locales/fr.json` (line 13) - **⚠️ Currently still says "John Doe"!**

---

### 2️⃣ About Section (Bio)

**Files:** `src/locales/en.json` and `src/locales/fr.json`

**Lines to edit:**

```json
"about": {
  "bio1": "I'm a passionate full-stack...", // ← First paragraph
  "bio2": "When I'm not coding...",         // ← Second paragraph
  "bio3": "My goal is to always build...",  // ← Third paragraph
}
```

**Update in BOTH files:**
- `src/locales/en.json` (lines 23-25)
- `src/locales/fr.json` (lines 23-25)

---

### 3️⃣ Skills (Icons and Names)

**File:** `src/sections/About.jsx`

**Lines to edit (around line 8-20):**

```javascript
const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '📜' },
  // ... add or remove skills here
]
```

**To customize:** Add/remove/edit skills in this array. The icons are emojis - you can use any emoji you want!

---

### 4️⃣ Projects

**Files:** `src/locales/en.json` and `src/locales/fr.json`

**Lines to edit:**

```json
"projects": {
  "items": [
    {
      "title": "E-Commerce Platform",     // ← Project name
      "description": "A full-stack..."    // ← Project description
    },
    // ... more projects
  ]
}
```

**Update in BOTH files:**
- `src/locales/en.json` (lines 32-57)
- `src/locales/fr.json` (lines 32-57)

**Tech stacks are hardcoded in:** `src/sections/Projects.jsx` (lines 9-16)

---

### 5️⃣ Work Experience & Education

**Files:** `src/locales/en.json` and `src/locales/fr.json`

**Lines to edit:**

```json
"experience": {
  "items": [
    {
      "type": "experience",              // or "education"
      "title": "Senior Full Stack...",   // ← Job title / Degree
      "company": "Tech Innovations...",  // ← Company / University
      "location": "San Francisco, CA",   // ← Location
      "period": "2021 - Present",        // ← Time period
      "description": "Leading development..." // ← What you did
    },
    // ... more experiences
  ]
}
```

**Update in BOTH files:**
- `src/locales/en.json` (lines 62-95)
- `src/locales/fr.json` (lines 62-95)

**Note:** Use `"type": "experience"` for jobs and `"type": "education"` for education.

---

### 6️⃣ Contact Section

#### Social Links

**File:** `src/sections/Contact.jsx`

**Lines to edit (around line 35-40):**

```javascript
const socialLinks = [
  { name: 'GitHub', url: '#', icon: '📱' },        // ← Add your GitHub URL
  { name: 'LinkedIn', url: '#', icon: '💼' },     // ← Add your LinkedIn URL
  { name: 'Twitter', url: '#', icon: '🐦' },      // ← Add your Twitter URL
  { name: 'Email', url: 'mailto:zakariahrida05@gmail.com', icon: '📧' }, // ← Already updated!
]
```

**Note:** The email is already updated to `zakariahrida05@gmail.com` ✅

#### Contact Form Messages

**Files:** `src/locales/en.json` and `src/locales/fr.json`

Edit contact-related messages if needed (lines 97-114 in both files).

---

### 7️⃣ CV/Resume Files

**Location:** `public/` folder

Replace these files with your actual PDFs:
- `public/cv_en.pdf` - Your English resume
- `public/cv_fr.pdf` - Your French resume (if you have one)

**Note:** The download button automatically uses the correct file based on the selected language!

---

### 8️⃣ Footer (Optional)

**Files:** `src/locales/en.json` and `src/locales/fr.json`

**Lines to edit (around line 115-117):**

```json
"footer": {
  "copyright": "© {year} Developer Portfolio...",  // ← Customize if you want
  "builtWith": "Built with React..."              // ← Customize if you want
}
```

---

## 🚨 Important Reminders

1. **Update BOTH language files** - Always edit both `en.json` and `fr.json` with the same information
2. **Keep structure consistent** - Don't change the JSON structure, only the values
3. **Name update needed** - Your name is "Hrida Zakaria" in English but still "John Doe" in French (`fr.json` line 13) - needs fixing!
4. **CV files** - Don't forget to replace the placeholder PDFs in the `public/` folder

---

## 📋 Quick Checklist

- [ ] Update name in `fr.json` (line 13) - currently says "John Doe"
- [ ] Update job title in both language files
- [ ] Update bio paragraphs in both language files
- [ ] Update/remove skills in `About.jsx`
- [ ] Add your real projects in both language files
- [ ] Add your work experience in both language files
- [ ] Add your education in both language files
- [ ] Update social media URLs in `Contact.jsx`
- [ ] Replace CV files in `public/` folder
- [ ] Test both languages (EN/FR) to make sure everything displays correctly

---

## 🎨 Additional Customization

### Change Skills Icons
Edit `src/sections/About.jsx` - You can use any emoji or even custom icons!

### Change Project Tech Stacks
Edit `src/sections/Projects.jsx` (lines 9-16) - Update the `techStacks` array

### Change Portfolio Logo/Title
Edit `src/locales/en.json` and `fr.json` - Change `"nav.portfolio"` value

---

Need help? Check the translation files - they're well organized and easy to understand!

