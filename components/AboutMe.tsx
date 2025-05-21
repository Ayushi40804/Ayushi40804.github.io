"use client";

import { Award, Code, Lightbulb, User, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect"; 
import React from "react";

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};


export function AboutMe() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 dark:text-white">
        About Me
      </h2>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<User className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Who I Am"
          description="I'm Ayushi, a passionate developer dedicated to creating intuitive and impactful digital experiences."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="My Core Skills"
          description="Proficient in modern web technologies, I specialize in building robust and scalable applications."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lightbulb className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Problem Solving"
          description="I enjoy tackling complex challenges and transforming them into elegant, efficient code solutions."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Award className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="What Drives Me"
          description="A continuous learner, I thrive on innovation and bringing creative ideas to life through development."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="My Vision"
          description="To craft digital products that are not just functional, but also delightful and user-centric."
        />
      </ul>
    </section>
  );
}