import React from 'react';
import './SkillsSection.css';

function SkillsSection({ skills }) {
  const skillCategories = [
    { name: 'Languages', items: skills.languages },
    { name: 'AI/ML', items: skills.aiml },
    { name: 'Frameworks & Libraries', items: skills.frameworks },
    { name: 'Tools & Platforms', items: skills.tools },
    { name: 'Concepts', items: skills.concepts }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.name}</h3>
            <div className="skills-list">
              {category.items.map((skill, i) => (
                <span key={i} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
