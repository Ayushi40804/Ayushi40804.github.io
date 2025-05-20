// D:\Ayushi40804.github.io\components\uiux\floating-dock.tsx

"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState, useRef } from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

import { cn } from "../../lib/utils";


export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    // Fixed at bottom right for mobile, MOVED FURTHER DOWN (bottom-4)
    // Main mobile dock container with prominent glass effect
    <div
      className={cn(
        "fixed bottom-4 right-4 md:hidden z-[100] rounded-2xl",
        "bg-white/30 dark:bg-white/10 backdrop-blur-md", // True glass feel
        "border border-white/20 dark:border-white/10 shadow-lg", // Subtle glass border
        "ring-1 ring-white/30 dark:ring-white/10", // Subtle outer ring for glow
        className
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2 items-end p-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  // Individual icon backgrounds changed to very dark grey
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 dark:bg-neutral-950 border border-neutral-900 dark:border-neutral-900 shadow-md"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        // Mobile toggle button background changed to very dark grey
        className="flex h-10 w-10 items-center justify-center rounded-full
                   bg-neutral-950 dark:bg-neutral-950
                   border border-neutral-900 dark:border-neutral-900
                   shadow-md"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    // Fixed at bottom center for desktop, MOVED FURTHER DOWN (bottom-4)
    // Main desktop dock container with prominent glass effect
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] hidden h-16 items-end gap-4 rounded-2xl",
        "bg-white/30 dark:bg-white/10", // Transparent glass background
        "backdrop-blur-md", // Frosted blur effect
        "border border-white/20 dark:border-white/10", // Subtle glass border
        "shadow-xl ring-1 ring-white/30 dark:ring-white/10", // Soft outer glow
        "px-4 pb-3 md:flex", // Keep original padding and flex behavior
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIconSpring = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIconSpring = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        // Individual icons backgrounds changed to very dark grey
        className="relative flex aspect-square items-center justify-center rounded-full bg-neutral-950 dark:bg-neutral-950 border border-neutral-900 dark:border-neutral-900 shadow-md"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white shadow-lg"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIconSpring, height: heightIconSpring }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}