import React from 'react';
// REMOVE: import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ayushi. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;