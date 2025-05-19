import React from 'react';
// REMOVE: import styles from './PersonalInfo.module.css';

const PersonalInfo: React.FC = () => {
  return (
    <section id="hero" className="personal-info container">
      <div className="personal-info-intro">
        <h1>Ayushi</h1>
        <p>
          I am a passionate computer science student with a focus on cybersecurity
          and full-stack development.
        </p>
      </div>
      <div className="personal-info-contact">
        <p>
          <b>Phone:</b> <a href="tel:9455626057">9455626057</a>
        </p>
        <p>
          <b>Email:</b>{' '}
          <a href="mailto:2305849@kiit.ac.in">2305849@kiit.ac.in</a>,{' '}
          <a href="mailto:ayushi40804@gmail.com">ayushi40804@gmail.com</a>
        </p>
        <p>
          <b>LinkedIn:</b>{' '}
          <a
            href="https://www.linkedin.com/in/ayushi40804/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/ayushi40804/
          </a>
        </p>
        <p>
          <b>Github:</b>{' '}
          <a
            href="https://github.com/Ayushi40804"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Ayushi40804
          </a>
        </p>
      </div>
      {/* You can add an image here if you want */}
    </section>
  );
};

export default PersonalInfo;