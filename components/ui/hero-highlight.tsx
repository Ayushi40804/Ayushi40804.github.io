"use client";
import { cn } from "../../lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const dotPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23e0e0e0' id='pattern-circle' cx='10' cy='10' r='2'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23ffffff' id='pattern-circle' cx='10' cy='10' r='2'%3E%3C/circle%3E%3C/svg%3E")`,
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23202020' id='pattern-circle' cx='10' cy='10' r='2'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d0d0d0' id='pattern-circle' cx='10' cy='10' r='2'%3E%3C/circle%3E%3C/svg%3E")`,
    },
  };

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "group relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.default,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: dotPatterns.dark.default,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-500 group-hover:opacity-100 dark:block"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>
        {React.Children.map(children, child => {
            if (React.isValidElement(child) && child.type === Highlight) {
                return React.cloneElement(child, { mouseX, mouseY });
            }
            return child;
        })}
      </div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
  mouseX,
  mouseY,
}: {
  children: React.ReactNode;
  className?: string;
  mouseX?: ReturnType<typeof useMotionValue>;
  mouseY?: ReturnType<typeof useMotionValue>;
}) => {
  const [rect, setRect] = React.useState<DOMRect | null>(null);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  return (
    <motion.span
      ref={ref}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
        backgroundSize: useMotionTemplate`${
            mouseX && mouseY && rect
            ? `calc(200% - ${Math.abs(mouseX.get() - (rect.left + rect.width / 2 + window.scrollX))}px) 100%`
            : '0% 100%'
        }`,
        WebkitMaskImage: useMotionTemplate`
            radial-gradient(
                ${rect?.width ? rect.width * 1.5 : 150}px circle at ${mouseX ? mouseX.get() - (rect?.left || 0) : 0}px ${mouseY ? mouseY.get() - (rect?.top || 0) : 0}px,
                black 0%,
                transparent 100%
            )
        `,
        maskImage: useMotionTemplate`
            radial-gradient(
                ${rect?.width ? rect.width * 1.5 : 150}px circle at ${mouseX ? mouseX.get() - (rect?.left || 0) : 0}px ${mouseY ? mouseY.get() - (rect?.top || 0) : 0}px,
                black 0%,
                transparent 100%
            )
        `,
        opacity: useMotionTemplate`${
            mouseX && mouseY && rect
            ? `clamp(0.5, 1 - ( ${Math.abs(mouseX.get() - (rect.left + rect.width * 0.5 + window.scrollX))} / ${rect.width * 0.8} ), 1)`
            : 0.5
        }`
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-white to-white px-1 pb-1 dark:from-neutral-800 dark:to-neutral-200`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};