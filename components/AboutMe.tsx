import React from 'react';
import { CardSpotlight } from "./ui/card-spotlight"; // Corrected import path

interface Certification {
  title: string;
  date: string;
}

export function AboutMe() {
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
    <section id="about-me" className="py-8 md:py-12 lg:py-16 bg-transparent">
      <div className="mb-[5rem] pt-[3rem]">
        <div className="flex justify-center items-center w-full text-3xl mt-5 font-bold text-neutral-700 dark:text-white">
          <h1>A little about ME</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
          {/* Who Am I Card */}
          <CardSpotlight
            colorss={[[164, 22, 35], [248, 94, 0]]} // Example colors
            className="m-1 h-[25rem] md:h-auto min-h-[25rem]" // Ensure consistent height but allow flexibility
            titlee={
              <div className="text-xl font-bold relative z-20 mt-2 text-white">
                $ whoami
              </div>
            }
            contentt={
              <div className="text-left"> {/* Added text-left for contact details */}
                <p className="text-neutral-200 mt-4 relative z-20">
                  Hey There! I am **Ayushi**.
                </p>
                <p className="text-neutral-200 mt-4 relative z-20">
                  A passionate **computer science student** with a focus on **cybersecurity** and **full-stack development**. I thrive on learning and building innovative solutions.
                </p>
                <div className="mt-6 text-sm space-y-2"> {/* Added spacing for contact details */}
                  <p className="text-neutral-300">
                    <b className="font-semibold text-white">Phone:</b>{' '}
                    <a href="tel:9455626057" className="text-blue-300 hover:underline">9455626057</a>
                  </p>
                  <p className="text-neutral-300">
                    <b className="font-semibold text-white">Email:</b>{' '}
                    <a href="mailto:2305849@kiit.ac.in" className="text-blue-300 hover:underline">2305849@kiit.ac.in</a>
                    ,{' '}
                    <a href="mailto:ayushi40804@gmail.com" className="text-blue-300 hover:underline">ayushi40804@gmail.com</a>
                  </p>
                  <p className="text-neutral-300">
                    <b className="font-semibold text-white">LinkedIn:</b>{' '}
                    <a
                      href="https://www.linkedin.com/in/ayushi40804/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                    >
                      linkedin.com/in/ayushi40804/
                    </a>
                  </p>
                  <p className="text-neutral-300">
                    <b className="font-semibold text-white">Github:</b>{' '}
                    <a
                      href="https://github.com/Ayushi40804"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                    >
                      github.com/Ayushi40804
                    </a>
                  </p>
                </div>
              </div>
            }
          />

          {/* Education Card */}
          <CardSpotlight
            colorss={[[126, 46, 132], [209, 64, 129]]} // Example colors
            className="m-1 h-[25rem] md:h-auto min-h-[25rem]"
            titlee={
              <div className="text-xl font-bold relative z-20 mt-2 text-white">
                $ whatdoido (Education)
              </div>
            }
            contentt={
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2 relative z-20">
                  Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar
                </h3>
                <p className="text-neutral-200 mt-4 relative z-20">
                  B.Tech. in **Computer Science and Engineering**
                </p>
                <p className="text-neutral-300 text-sm mt-1 relative z-20">
                  CGPA: 9.15 (As of 3rd Semester)
                </p>
                <p className="text-neutral-300 text-sm mt-1 relative z-20">
                  July 2023 - August 2027
                </p>
              </div>
            }
          />

          {/* Certifications Card */}
          <CardSpotlight
            colorss={[[0, 191, 178], [26, 94, 99]]} // Example colors
            className="m-1 h-[25rem] md:h-auto min-h-[25rem]"
            titlee={
              <div className="text-xl font-bold relative z-20 mt-2 text-white">
                $ beyondcode (Certifications)
              </div>
            }
            contentt={
              <div className="text-left">
                <h3 className="text-xl font-bold relative z-20 mt-2 text-white mb-4">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="relative z-20 p-4 rounded-lg bg-white/10 dark:bg-neutral-800/20 backdrop-filter backdrop-blur-sm">
                      <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                      <p className="text-sm text-neutral-300">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}