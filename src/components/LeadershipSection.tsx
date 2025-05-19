import React from 'react';
// REMOVE: import styles from './LeadershipSection.module.css';

interface LeadershipRole {
  title: string;
  position?: string;
  date?: string;
}

const LeadershipSection: React.FC = () => {
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
    <section id="leadership" className="leadership-section">
      <h2>Campus and Community Leadership</h2>
      <div className="leadership-container">
        {leadershipRoles.map((role, index) => (
          <div key={index} className="leadership-card">
            <h3>{role.title}</h3>
            {role.position && (
              <p className="position">Position: {role.position}</p>
            )}
            {role.date && <p className="date">Date: {role.date}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;