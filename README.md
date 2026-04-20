# Assignment 4 — Personal Portfolio Website

**Name:** Gatri Reddy  
**Roll No:** SE23UARI109 
**Course:** Web Tech Workshop 
**Deadline:** 22/04/2026

---

## Live Website

🔗 **https://gatrireddy.github.io/portfolio/**

## GitHub Repository

📁 **https://github.com/gatrireddy/portfolio**

---

## About This Project

A personal portfolio website built using **React** and **React Router DOM**, deployed on GitHub Pages. The site showcases my projects, skills, and personal details as part of Assignment 4.

---

## Pages

### Home Page (`/`)
- About Me section
- Research Interests
- Personal Details (Name, Phone, Email, Skills)
- Profile Picture
- Education & Experience
- Achievements

### Projects Page (`/projects`)
- 5+ projects displayed with descriptions
- Each project links to its GitHub repository

---

## Personal Details

| Field | Value |
|---|---|
| Name | Sai Gatri Reddy |
| Phone | [Your Phone Number] |
| Personal Email | gatrireddy@gmail.com |
| College Email | [Your College Email] |
| GitHub | https://github.com/gatrireddy |
| LinkedIn | https://linkedin.com/in/gatrireddy |

---

## Skills

- **Languages:** Python, JavaScript, C++
- **AI/ML:** TensorFlow, PyTorch, Scikit-learn
- **Frameworks:** React, Node.js
- **Tools:** Git, VS Code, GitHub

---

## Projects

| Project | Description | Link |
|---|---|---|
| RESCORE AI | AI-powered resume analyzer built with React + Vite + Puter.js | [GitHub](https://github.com/gatrireddy) |
| Legal & Medical Doc Summarizer | T5 + LoRA fine-tuned summarization model | [GitHub](https://github.com/gatrireddy) |
| Dishly | Recipe finder app built with React + Spoonacular API | [GitHub](https://github.com/gatrireddy) |
| F1 Race Predictor | Race result prediction using XGBoost | [GitHub](https://github.com/gatrireddy) |
| [Project 5] | [Description] | [GitHub](https://github.com/gatrireddy) |

---

## Tech Stack

- **Framework:** React 19
- **Routing:** React Router DOM (with `NavLink` for navigation)
- **Build Tool:** Vite
- **Styling:** CSS with CSS Custom Properties
- **Deployment:** GitHub Pages via `gh-pages`

---

## Navigation

Navigation is implemented using `NavLink` from React Router DOM with active state styling. `HashRouter` is used for GitHub Pages compatibility.

```jsx
import { NavLink } from 'react-router-dom';

<NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
<NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
```

---

## Deployment Steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gatrireddy/portfolio.git
git push -u origin main
```

### 2. Install gh-pages
```bash
npm install gh-pages --save-dev
```

### 3. package.json configuration
```json
"homepage": "https://gatrireddy.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4. vite.config.js — Base path for GitHub Pages
```js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

### 5. Use HashRouter (required for GitHub Pages)
```jsx
import { HashRouter } from 'react-router-dom';
```

### 6. Deploy
```bash
npm run deploy
```

### 7. Enable GitHub Pages
Go to Repository → Settings → Pages → Select branch: `gh-pages` → Save

---

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── ProjectCard.jsx
│   ├── SkillsSection.jsx
│   └── ContactInfo.jsx
├── pages/
│   ├── Home.jsx
│   └── Projects.jsx
├── data/
│   └── resumeData.js
├── App.jsx
├── main.jsx
└── styles/
    ├── index.css
    ├── App.css
    └── *.css

public/
└── gatri_reddy_resume.pdf
```

---

## How to Run Locally

```bash
git clone https://github.com/gatrireddy/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173 in your browser.
