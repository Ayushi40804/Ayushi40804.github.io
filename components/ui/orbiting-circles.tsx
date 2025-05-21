import { cn } from "../../lib/utils";
import React from "react";

export interface OrbitingCirclesProps {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number; 
    radius?: number;
    path?: boolean;
}

export function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 0,
    radius = 50,
    path = true,
}: OrbitingCirclesProps) {
    const childrenArray = React.Children.toArray(children);
    const numChildren = childrenArray.length;

    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 size-full"
                >
                    <circle
                        className="stroke-black/10 stroke-1 dark:stroke-white/10"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                    />
                </svg>
            )}

            {childrenArray.map((child, index) => {
                const angle = (360 / numChildren) * index;
                const individualAnimationOffset = (duration / numChildren) * index;
                const calculatedCssDelay = -(delay + individualAnimationOffset);


                return (
                    <div
                        key={index}
                        style={
                            {
                                "--duration": `${duration}s`,
                                "--radius": `${radius}px`,
                                "--delay": `${calculatedCssDelay}s`,
                                transform: `rotate(${angle}deg) translateY(calc(var(--radius) * -1)) rotate(-${angle}deg)`,
                            } as React.CSSProperties
                        }
                        className={cn(
                            `absolute flex items-center justify-center rounded-full`,
                            `animate-orbit [animation-delay:var(--delay)]`, 
                            { "[animation-direction:reverse]": reverse },
                            className, 
                        )}
                    >
                        {child}
                    </div>
                );
            })}
        </>
    );
}