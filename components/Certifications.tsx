"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; 
import Image from 'next/image'; 
import { useOutsideClick } from "../hooks/use-outside-click";
import { portfolioItems } from './../data/portfoliodata'; 

interface CertificationItem {
  id: string;
  title: string;
  description: string; 
  date: string;
  type: 'certificate';
  issuingBody: string;
  link: string; 
  thumbnail: string; 
  src: string; 
  ctaText: string;
  content?: () => React.ReactNode;
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export function Certifications() {
  const certifications = portfolioItems.filter(item => item.type === 'certificate') as CertificationItem[];

  const [active, setActive] = useState<CertificationItem | null>(null); 
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <section className="relative py-20" id="certifications">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-b from-black to-gray-300 bg-clip-text text-transparent dark:from-white dark:to-black">
        Certifications
      </h2>
      <p className="max-w-2xl text-base md:text-xl text-center mx-auto mb-10 dark:text-neutral-200">
        Showcasing my acquired knowledge and skills through various certifications.
      </p>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-50"> 
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-[60]" // Ensure close button is on top
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={500} 
                  height={300} 
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg md:text-xl" 
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mt-1" 
                    >
                      {active.issuingBody} &bull; {active.date}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content ? active.content() : <p>{active.description}</p>}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {certifications.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image 
                  width={100} 
                  height={100} 
                  src={card.thumbnail} 
                  alt={card.title}
                  className="h-20 w-20 md:h-14 md:w-14 rounded-lg object-cover object-top flex-shrink-0"
                />
              </motion.div>
              <div className="flex flex-col text-center md:text-left mt-2 md:mt-0">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-base"
                >
                  {card.title}
                </motion.h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">{card.issuingBody} &bull; {card.date}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                    {card.description}
                </p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 dark:bg-neutral-700 hover:bg-green-500 dark:hover:bg-green-500 hover:text-white text-black dark:text-white mt-4 md:mt-0 md:self-center"
              onClick={(e) => {
                e.stopPropagation(); 
                window.open(card.link, '_blank'); 
              }}
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}