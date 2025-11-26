# Data Scientist & Full Stack Developer Portfolio

A futuristic 3D portfolio website featuring an interactive black hole visualization with orbiting projects. Built with React, Three.js, and Tailwind CSS.

## 🚀 Features

- **3D Black Hole Visualization** - Interactive 3D model using Three.js and React Three Fiber
- **Particle System** - Cosmic particle effects surrounding the black hole
- **Responsive Design** - Fully responsive across all devices
- **Smooth Animations** - Framer Motion powered animations
- **Project Filtering** - Dynamic project categorization and filtering
- **Glass Morphism UI** - Modern glassmorphism design elements
- **Skill Visualization** - Animated skill bars with percentage indicators

## 🛠️ Technologies Used

### Frontend
- React 18
- Vite (Build Tool)
- Tailwind CSS
- Framer Motion
- Three.js
- React Three Fiber
- React Three Drei
- Lucide React (Icons)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository or navigate to the project folder:
```bash
cd c:\Users\DELL\Desktop\cv
```

2. Install dependencies:
```bash
npm install
```

3. Update your personal information in `src/data/portfolio.js`:
   - Add your name
   - Add your GitHub URL
   - Add your email
   - Add your phone number
   - Update any other personal details

## 🚀 Running the Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📦 Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
cv/
├── public/
├── src/
│   ├── components/
│   │   ├── BlackHole.jsx       # 3D black hole scene
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Education.jsx       # Education section
│   │   ├── Experience.jsx      # Experience section
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Projects.jsx        # Projects portfolio
│   │   └── Footer.jsx          # Footer section
│   ├── data/
│   │   └── portfolio.js        # All portfolio data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── black_hole.glb              # 3D black hole model
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### Updating Personal Information
Edit `src/data/portfolio.js` to update:
- Personal info (name, title, location, contact)
- Education history
- Work experience
- Skills and proficiency levels
- Projects and categories
- Business activities

### Changing Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  cosmic: {
    dark: '#0a0a1f',
    purple: '#6366f1',
    blue: '#3b82f6',
    pink: '#ec4899',
    cyan: '#06b6d4',
  }
}
```

### Modifying 3D Scene
Edit `src/components/BlackHole.jsx` to:
- Adjust particle count
- Change rotation speed
- Modify lighting
- Update camera position

## 🌐 Deployment

This project can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Railway
- Render

For Netlify/Vercel:
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📱 Sections Overview

1. **Hero** - Introduction with name, title, and contact links
2. **Education** - Academic background (ESPRIT, ISSAT Sousse)
3. **Experience** - Work history (Clevertech, RIDTech, ProjectLib)
4. **Skills** - Technical skills with proficiency bars across 5 categories
5. **Projects** - 20+ projects filterable by category:
   - AI & Machine Learning (5 projects)
   - ProjectLib Ecosystem (3 projects)
   - Sold Applications (2 projects)
   - Web Development (5 projects)
   - Content & Business (3 projects)
   - DevOps & Network (2 projects)
6. **Footer** - Additional activities and contact information

## 🎯 Key Highlights

- **Data Science Focus** - Emphasized ML/AI projects and skills
- **20+ Projects** - Comprehensive project portfolio
- **Entrepreneurial Experience** - RIDTech Agency, ProjectLib Ecosystem
- **Sold Applications** - TikTok Live Scraper, Facebook App
- **Full Stack Expertise** - Laravel, Symfony, React, Node.js, Python
- **Academic Projects** - Crime Prediction, Waste Sorting AI

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For questions or support, contact via email or GitHub.

---

**Built with passion for showcasing Data Science and Full Stack Development expertise** 🚀
