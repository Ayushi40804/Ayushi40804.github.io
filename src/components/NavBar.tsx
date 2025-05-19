import React from 'react';
// REMOVE: import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Ayushi</div>
      <ul className="navbar-nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#leadership">Leadership</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;