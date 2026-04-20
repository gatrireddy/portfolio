import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { resumeData } from '../data/resumeData';
import './Projects.css';

function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-description">
          A collection of projects showcasing my work in AI/ML, web development, and data science
        </p>
      </div>

      <div className="projects-grid">
        {resumeData.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
