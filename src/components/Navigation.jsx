import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';
import './Navigation.css';

function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-icon">GR</span>
        </NavLink>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Projects
            </NavLink>
          </li>
        </ul>

        <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
