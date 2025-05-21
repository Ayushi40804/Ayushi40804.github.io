"use client";

import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { cn } from "../lib/utils";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"; 

export function HeroSection() {
  const ayushiWords = [
    {
      text: "Hi!",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "AYUSHI.",
      className: "text-blue-500 dark:text-blue-500" 
    },
  ];

  return (
    <HeroHighlight containerClassName="h-screen flex flex-col items-center justify-center p-4">
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <p className={cn("text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-2")}>
          <Highlight>Welcome to my </Highlight>
        </p>

        <p className={cn("text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-300 mb-2")}>
          DIGITAL SPACE
        </p>
        <TypewriterEffectSmooth words={ayushiWords} className={cn("text-3xl md:text-4xl lg:text-5xl font-extrabold")} />

      </div>
    </HeroHighlight>
  );
}