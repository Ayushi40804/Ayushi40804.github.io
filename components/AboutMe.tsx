"use client";

import { GlowingEffect } from "./ui/glowing-effect";

interface GridItemProps {
  area: string;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[12rem] list-none ${area}`}>
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
      <ul className="grid grid-cols-1 grid-rows-none gap-4
                     md:grid-cols-12 md:grid-rows-1 lg:gap-4 {/* Changed to md:grid-rows-1 */}
                     xl:grid-rows-1 xl:max-h-full">

        <GridItem
          area="md:[grid-area:1/1/2/5] xl:[grid-area:1/1/2/5]"
          title="Who I Am"
          description="Hi, I'm Ayushi, pursuing a B.Tech in Computer Science Engineering at Kalinga Institute of Industrial Technology."
        />

        <GridItem
          area="md:[grid-area:1/5/2/9] xl:[grid-area:1/5/2/9]"
          title="My Core Skills"
          description="Utilizing a blend of AI/ML, cybersecurity, and full-stack development skills to engineer solutions for real-world problems"
        />

        <GridItem
          area="md:[grid-area:1/9/2/13] xl:[grid-area:1/9/2/13]"
          title="What Drives Me"
          description="Guided by the philosophy of Kaizen (continuous improvement), I focus to enhance both my technical and soft skills to deliver practical, impactful results."
        />
      </ul>
    </section>
  );
}