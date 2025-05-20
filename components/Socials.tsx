import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing icons
// You might need to install react-icons: npm install react-icons

const SocialsSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ayushi40804',
      icon: FaGithub,
      description: 'Explore my coding projects.',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ayushi40804/',
      icon: FaLinkedin,
      description: 'Connect with me professionally.',
    },
    {
      name: 'Email',
      url: 'mailto:ayushi40804@gmail.com',
      icon: FaEnvelope,
      description: 'Send me an email.',
    },
    {
      name: 'Phone',
      url: 'tel:9455626057',
      icon: FaPhone,
      description: 'Give me a call.',
    },
    // Add more social links as needed (e.g., Twitter, personal website)
  ];

  return (
    <section id="socials" className="py-8 md:py-12 lg:py-16 bg-transparent text-neutral-700 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-neutral-700 dark:text-white text-center mb-12">Connect With Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-neutral-200 dark:border-neutral-700"
            >
              <link.icon className="text-4xl text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                {link.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;