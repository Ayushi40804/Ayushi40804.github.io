import React from 'react';

// Interface for hackathon experiences
interface HackathonExperience {
  title: string;
  position?: string;
  description: string;
  date?: string;
}

// Interface for leadership roles
interface LeadershipRole {
  title: string;
  position?: string;
  date?: string;
}

const ExperienceSection: React.FC = () => {
  const hackathonExperiences: HackathonExperience[] = [
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

  const leadershipRoles: LeadershipRole[] = [
    {
      title: 'Microsoft Learn Student Ambassador (MLSA), KIIT Chapter',
      position: 'Technical Executive - Cyber Team',
      date: 'January 2024 - Present',
    },
    {
      title: 'GeeksforGeeks (GFG), KIIT Society',
      position: 'Technical Team Member - Cyber Team',
      date: 'August 2024 - Present',
    },
  ];

  return (
    <section id="experience" className="py-8 md:py-12 lg:py-16 bg-transparent">
      {/* Hackathon Experience Section */}
      <h2 className="text-3xl font-bold text-neutral-700 dark:text-white text-center mb-6">Hackathon Experience</h2>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mb-12"> {/* Added mb-12 for spacing */}
        {hackathonExperiences.map((experience, index) => (
          <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{experience.title}</h3>
            {experience.position && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                Position: {experience.position}
              </p>
            )}
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">{experience.description}</p>
            {experience.date && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Date: {experience.date}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Campus and Community Leadership Section */}
      <h2 className="text-3xl font-bold text-neutral-700 dark:text-white text-center mb-6">Campus and Community Leadership</h2>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {leadershipRoles.map((role, index) => (
          <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{role.title}</h3>
            {role.position && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                Position: {role.position}
              </p>
            )}
            {role.date && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Date: {role.date}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;