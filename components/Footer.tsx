import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-neutral-900 text-neutral-400 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Ayushi. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;