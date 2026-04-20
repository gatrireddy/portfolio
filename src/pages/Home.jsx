import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';
import SkillsSection from '../components/SkillsSection';
import { resumeData } from '../data/resumeData';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{resumeData.name}</h1>
          <p className="hero-subtitle">{resumeData.title}</p>
          <p className="hero-tagline">{resumeData.tagline}</p>
        </div>
      </div>

      <section className="about-section">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">{resumeData.about}</p>
      </section>

      <section className="interests-section">
        <h2 className="section-title">Research Interests</h2>
        <ul className="interests-list">
          {resumeData.researchInterests.map((interest, idx) => (
            <li key={idx} className="interest-item">{interest}</li>
          ))}
        </ul>
      </section>

      <ContactInfo data={resumeData} />

      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="education-item">
              <h3 className="education-school">{edu.school}</h3>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-details">{edu.details}</p>
              <p className="education-location">{edu.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-period">{exp.period}</p>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SkillsSection skills={resumeData.skills} />

      <section className="projects-preview">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-description">Check out a few of my recent projects</p>
        <Link to="/projects" className="projects-link">
          View All Projects →
        </Link>
      </section>

      <section className="achievements-section">
        <h2 className="section-title">Achievements</h2>
        <ul className="achievements-list">
          {resumeData.achievements.map((achievement, idx) => (
            <li key={idx} className="achievement-item">{achievement}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Home;
