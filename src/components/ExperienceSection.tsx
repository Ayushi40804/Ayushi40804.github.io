import React from 'react';
// REMOVE: import styles from './ExperienceSection.module.css';

interface Experience {
  title: string;
  position?: string;
  description: string;
  date?: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Smart India Hackathon (SIH)',
      position: 'Team Leader',
      description: 'Implemented an online self-interview system that evaluates interviewers (based on the questions asked) and interviewees (based on the answer) performance to generate scores.',
      date: 'September 2024',
    },
    {
      title: 'Hackocalypse Hackathon (24hr)',
      position: 'Team Leader',
      description: 'Developed a Retrieval-Augmented Generation (RAG) system for guiding users based on map descriptions.(Secured 2nd place)',
    },
    {
      title: 'ICDCIT Hackathon (48hrs)',
      position: 'Team Leader',
      date: 'December 2024 - January 2025',
      description: 'Built an online healthcare insurance website with a chatbot functionality that can show graphs in chatbot from the data in the database. (Theme was Healthcare)',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experiences-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.title}</h3>
            {experience.position && (
              <p className="position">Position: {experience.position}</p>
            )}
            <p className="description">{experience.description}</p>
            {experience.date && (
              <p className="date">Date: {experience.date}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;