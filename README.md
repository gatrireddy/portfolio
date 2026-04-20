# Gatri Reddy's Portfolio

A professional, modern portfolio website built with React Router, showcasing projects, skills, and experience.

**Live Website:** https://gatrireddy.github.io/portfolio/  
**GitHub Repository:** https://github.com/gatrireddy/portfolio

## Features

✨ **Modern & Professional Design**
- Clean, minimal aesthetic with professional color scheme
- Responsive design that works on desktop, tablet, and mobile
- Smooth animations and transitions with cubic-bezier easing curves
- Professional typography with consistent weight hierarchy

🌙 **Dark/Light Mode Toggle**
- Persistent theme preference saved to localStorage
- Smooth transitions between themes
- Carefully chosen colors for both light and dark modes

🎨 **Custom Styling**
- CSS custom properties (variables) for consistent theming
- No vibe-coded patterns - all design decisions are intentional
- Subtle hover states (2-4px lift max)
- Proportional spacing and sizing

🔗 **React Router Navigation**
- Client-side routing for fast page transitions
- NavLink components with active states
- HashRouter for GitHub Pages compatibility

📋 **Key Sections**
- **Home Page**: About me, research interests, education, experience, skills, and achievements
- **Projects Page**: Portfolio of 5+ projects with links to GitHub repositories
- **Contact**: Email copy-to-clipboard, phone, GitHub, LinkedIn, and resume download
- **Skills**: Technical skills organized by category (Languages, AI/ML, Frameworks, Tools)

📄 **Resume PDF Download**
- Professional resume PDF available for download
- Generated from structured data for consistency

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Navbar with theme toggle
│   ├── ProjectCard.jsx         # Reusable project card component
│   ├── SkillsSection.jsx       # Skills grid display
│   └── ContactInfo.jsx         # Contact details and links
├── pages/
│   ├── Home.jsx                # Main portfolio page
│   └── Projects.jsx            # Projects showcase page
├── data/
│   └── resumeData.js           # Central data source for all content
├── App.jsx                     # Main app with router setup
├── main.jsx                    # Entry point
└── styles/
    ├── index.css               # Global styles and CSS variables
    ├── App.css                 # App-level styles (navigation)
    └── [component].css         # Component-specific styles

public/
└── gatri_reddy_resume.pdf      # Resume PDF for download

```

## Technology Stack

- **Frontend Framework**: React 19
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS with CSS Custom Properties (Variables)
- **Deployment**: GitHub Pages
- **PDF Generation**: PDFKit (for resume)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gatrireddy/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
1. Builds the project (`npm run build`)
2. Deploys the `dist` folder to the `gh-pages` branch
3. GitHub Pages automatically serves the new deployment

## Customization

### Update Resume Data
Edit `src/data/resumeData.js` to update all portfolio content:
- Personal details (name, email, phone, links)
- About section
- Education and experience
- Projects
- Skills
- Achievements

### Modify Styling
- **Global variables**: Edit `src/index.css` (CSS custom properties)
- **Component styles**: Edit individual `*.css` files in `src/components/` and `src/pages/`
- **Theme colors**: Modify the light/dark mode color variables in `:root` and `[data-theme="light"]`

### Change Homepage URL
Update `"homepage"` in `package.json` to match your GitHub Pages URL:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

## Key Features Breakdown

### Dark/Light Mode
- Toggle button in navigation bar
- Preference saved to localStorage
- Smooth CSS transitions between themes
- CSS variables enable theme switching without code duplication

### Email Copy-to-Clipboard
- Click email to copy to clipboard
- Visual feedback with "Copied!" indicator
- Smooth animations

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet (768px) and mobile (480px)
- Flexible grid layouts
- Touch-friendly navigation

### Performance
- Optimized bundle size (~77KB gzipped)
- Fast page transitions with HashRouter
- Efficient CSS variable system
- Lazy component loading through routing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (iOS 14+)
- Mobile browsers

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliant for readability

## Future Enhancements

Potential improvements:
- [ ] Add dark mode system preference detection
- [ ] Add contact form with email integration
- [ ] Add blog section
- [ ] Add project filtering/search
- [ ] Add testimonials section
- [ ] Add animation preferences (respects prefers-reduced-motion)

## License

This project is open source and available for personal use.

## Contact

- **Email**: gatrireddy@gmail.com
- **GitHub**: https://github.com/gatrireddy
- **LinkedIn**: https://linkedin.com/in/gatrireddy

---

Built with ❤️ using React and Vite. Designed to make a great first impression.
