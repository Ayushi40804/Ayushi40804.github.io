import React from 'react';
// REMOVE: import styles from './ProjectsSection.module.css';

interface Project {
  title: string;
  position?: string;
  description: string;
  date?: string;
  status?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Vulnerability Scanning Tool',
      position: 'Member',
      description: 'Building a tool for XSS, IDOR, and SQLi vulnerability scanning terminal based tool.',
    },
    {
      title: 'Proxy Server',
      position: 'Team Leader',
      description: 'Building a lightweight Proxy Server web app with GUI to intercept and modify HTTP/HTTPS requests.',
      date: 'January 2025',
      status: 'In Progress',
    },
    {
      title: "Hacktoberfest '24",
      description: 'Stable Diffusion model using LoRA to generate Pokemon images. Port Scanner development. Text-to-Speech tool using Python and DeepSpeech.',
      date: 'October 2024',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            {project.position && (
              <p className="position">Position: {project.position}</p>
            )}
            <p className="description">{project.description}</p>
            {project.date && <p className="date">Date: {project.date}</p>}
            {project.status && <p className="status">Status: {project.status}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;