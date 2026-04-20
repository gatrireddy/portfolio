import React, { createContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="app" data-theme={theme}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
