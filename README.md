# Developer Portfolio

A modern, fully responsive single-page developer portfolio built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- ✨ Smooth animations with Framer Motion
- 🎨 Clean black & white minimalist design
- 📱 Fully responsive layout
- ⚡ Fast development with Vite
- 🎯 Single-Page Application (SPA)

## Sections

- **Hero** - Eye-catching introduction with smooth animations
- **About** - Personal bio and skills showcase
- **Projects** - Portfolio projects with hover effects
- **Experience** - Timeline of work experience and education
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   ├── cv_en.pdf         # English CV (replace with your own)
│   └── cv_fr.pdf         # French CV (replace with your own)
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Section.jsx
│   ├── sections/         # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── contexts/         # React contexts
│   │   └── LanguageContext.jsx
│   ├── locales/          # Translation files
│   │   ├── en.json
│   │   └── fr.json
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Multilingual Support

This portfolio includes full English (EN) and French (FR) language support:

- **Language Toggle**: Click the language button in the navbar to switch between EN and FR
- **Automatic Translation**: All content updates instantly when switching languages
- **CV Download**: The CV download button automatically downloads the correct language version
  - English: `cv_en.pdf`
  - French: `cv_fr.pdf`

### Adding Your CV Files

1. Replace the placeholder files in the `public/` folder:
   - `public/cv_en.pdf` - Your English CV
   - `public/cv_fr.pdf` - Your French CV
2. Ensure the files are named exactly as shown above
3. The download functionality will work automatically

### Customizing Translations

Edit the translation files:
- `src/locales/en.json` - English translations
- `src/locales/fr.json` - French translations

## Customization

### Update Personal Information

1. Edit translation files (`src/locales/en.json` and `src/locales/fr.json`) to update:
   - Hero section: name, title, description
   - About section: bio text
   - Projects: project details
   - Experience: work history and education
   - Contact: social links and messages

2. Update name in both translation files under `hero.name`

### Styling

The project uses TailwindCSS. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component styles using Tailwind classes

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Context API** - Language state management
- **Local Storage** - Persistent language preference

## License

This project is open source and available for personal and commercial use.
## Auther 

Made with love by Zakaria hrida !!

