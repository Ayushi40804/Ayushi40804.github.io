"use client";

import { HeroHighlight } from "./ui/hero-highlight";
import { cn } from "../lib/utils";
import { AuroraText } from "./ui/aurora-text";

export function HeroSection() {
  return (
    <HeroHighlight containerClassName="h-screen flex flex-col items-center justify-center p-4">
      <div className="relative z-20 flex flex-col items-center justify-center text-center">

        <p className={cn("text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-2")}>
          I am Ayushi
        </p>

        <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4")}>
          <AuroraText>I am a DEVELOPER</AuroraText>
        </h1>

      </div>
    </HeroHighlight>
  );
}