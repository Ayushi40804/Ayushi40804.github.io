"use client";

import React from "react";
import { LinkPreview } from "./ui/link-preview"; 

const socialLinks = [
  {
    id: 'social-linkedin',
    name: 'LinkedIn Profile',
    description: 'Connect with me professionally.',
    link: 'https://www.linkedin.com/in/Ayushi40804/',
  },
  {
    id: 'social-github',
    name: 'GitHub',
    description: 'Check out my code repositories.',
    link: 'https://github.com/Ayushi40804', 
  },
  {
    id: 'social-instagram',
    name: 'Instagram',
    description: 'Follow my creative side.',
    link: 'https://www.instagram.com/Ayushi40804/',
  },
  {
    id: 'social-leetcode',
    name: 'LeetCode',
    description: 'My problem-solving journey.',
    link: 'https://leetcode.com/Ayushi40804/',
  },
  {
    id: 'social-hackerrank',
    name: 'HackerRank',
    description: 'Showcasing my coding challenges.',
    link: 'https://www.hackerrank.com/profile/Ayushi40804',
  },
];

export function Socials() {
  return (
    <section className="relative py-20" id="socials">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-b from-black to-gray-300 bg-clip-text text-transparent dark:from-white dark:to-black">
        Connect With Me
      </h2>
      <p className="max-w-2xl text-base md:text-xl text-center mx-auto mb-10 dark:text-neutral-200">
        Find me across the web:
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 px-4 max-w-4xl mx-auto">
        {socialLinks.map((social) => (
          <LinkPreview
            key={social.id}
            url={social.link}
            className="font-bold text-lg md:text-xl text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
          >
            {social.name}
            {social.description && (
              <span className="block text-sm font-normal text-neutral-500 dark:text-neutral-400">
                {social.description}
              </span>
            )}
          </LinkPreview>
        ))}
      </div>
    </section>
  );
}