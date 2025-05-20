import React from 'react';

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
    <section id="projects" className="py-8 md:py-12 lg:py-16 bg-transparent">
      <h2 className="text-3xl font-bold text-neutral-700 dark:text-white text-center mb-6">Projects</h2>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{project.title}</h3>
            {project.position && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                Position: {project.position}
              </p>
            )}
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">{project.description}</p>
            {project.date && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Date: {project.date}</p>
            )}
            {project.status && (
              <p className="text-sm text-blue-500 dark:text-blue-300">Status: {project.status}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;