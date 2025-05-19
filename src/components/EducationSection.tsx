import React from 'react';
// REMOVE: import styles from './EducationSection.module.css';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-details">
        <h3>Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar</h3>
        <p>B.Tech. in Computer Science and Engineering</p>
        <p>CGPA: 9.15 (As of 3rd Semester)</p>
        <p>July 2023 - August 2027</p>
      </div>
    </section>
  );
};

export default EducationSection;