import React from 'react';
// REMOVE: import styles from './CertificationsSection.module.css';

interface Certification {
  title: string;
  date: string;
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'Foundation in Data Science - Indian Institute of Technology, Madras',
      date: 'December 2024',
    },
    {
      title: 'Python Full Stack Developer - AICTE',
      date: 'December 2024',
    },
    {
      title: 'Networking Basics - CISCO Networking Academy',
      date: 'May 2024',
    },
    {
      title: 'Introduction to Cybersecurity - CISCO Networking Academy',
      date: 'January 2024',
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.title}</h3>
            <p className="date">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;