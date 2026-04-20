import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.name}</h3>
        <span className="project-date">{project.date}</span>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="project-technologies">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-badge">{tech}</span>
        ))}
      </div>
      
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub →
      </a>
    </div>
  );
}

export default ProjectCard;
