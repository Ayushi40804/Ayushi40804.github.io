// File location: components/Projects.tsx
"use client";

import React from 'react';
import { GlowingEffect } from "./ui/glowing-effect";

interface Project {
  title: string;
  position?: string;
  description: string;
  date?: string;
  status?: string;
  videoUrl?: string; // Add optional video URL property
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Vulnerability Scanning Tool',
      position: 'Member',
      description: 'Building a tool for XSS, IDOR, and SQLi vulnerability scanning terminal based tool.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef', // Example YouTube embed URL
      // Replace with your actual video URL (e.g., YouTube embed, Vimeo embed, or direct video file)
    },
    {
      title: 'Proxy Server',
      position: 'Team Leader',
      description: 'Building a lightweight Proxy Server web app with GUI to intercept and modify HTTP/HTTPS requests.',
      date: 'January 2025',
      status: 'In Progress',
      videoUrl: 'https://player.vimeo.com/video/76979871?h=8274e1d3e8&color=ffffff&byline=0&portrait=0', // Example Vimeo embed URL
    },
    {
      title: "Hacktoberfest '24",
      description: 'Stable Diffusion model using LoRA to generate Pokemon images. Port Scanner development. Text-to-Speech tool using Python and DeepSpeech.',
      date: 'October 2024',
      // No videoUrl for this project, so it won't display a video window
    },
  ];

  return (
    <section id="projects" className="py-8 md:py-12 lg:py-16 bg-transparent">
      <h2 className="text-3xl font-bold text-neutral-700 dark:text-white text-center mb-6">Projects</h2>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              glowThickness={3}
            />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-white dark:bg-neutral-800">

              {/* Video Window */}
              {project.videoUrl && (
                <div className="w-full mb-4 rounded-lg overflow-hidden aspect-video"> {/* aspect-video maintains 16:9 ratio */}
                  {project.videoUrl.includes('youtube.com/embed') || project.videoUrl.includes('player.vimeo.com') ? (
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    // Fallback for direct video file (e.g., .mp4)
                    <video
                      controls
                      className="w-full h-full object-cover"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}

              {/* Project Details */}
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{project.title}</h3>
              {project.position && (
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                  Position: {project.position}
                </p>
              )}
              <p className="text-neutral-700 dark:text-neutral-300 mb-2">{project.description}</p>
              {project.date && (
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Date: {project.date}</p>
              )}
              {project.status && (
                <p className="text-sm text-blue-500 dark:text-blue-300">Status: {project.status}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;