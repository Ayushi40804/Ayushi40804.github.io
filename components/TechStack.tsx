import { OrbitingCircles } from "./ui/orbiting-circles";
import { IconBrandAws, IconBrandBootstrap, IconBrandDebian, IconBrandDocker, IconBrandGatsby, IconBrandGit, IconBrandGithub, IconBrandGitlab, IconBrandGolang, IconBrandJavascript, IconBrandMysql, IconBrandNextjs, IconBrandPython, IconBrandReact, IconBrandRedhat, IconBrandTailwind, IconBrandTypescript, IconBrandUbuntu, IconBrandVercel } from "@tabler/icons-react";
import React from "react";

export function TechStack() {
    return (
        <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden md:overflow-visible rounded-lg bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                My Tech Stack
            </span>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent" 
                duration={20}
                delay={0}
                radius={80}
            >
                <IconBrandGithub size={25} />
                <IconBrandGitlab size={25} />
                <IconBrandGit size={25} />
                <IconBrandUbuntu size={25} />
                <IconBrandDebian size={25} />
                <IconBrandDocker size={25} />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent" 
                radius={150}
                duration={20}
                delay={0} 
                reverse
            >
                <IconBrandPython size={35} />
                <IconBrandTypescript size={35} />
                <IconBrandJavascript size={35} />
                <IconBrandNextjs size={35} />
                <IconBrandReact size={35} />
                <IconBrandTailwind size={35} />
                <IconBrandGolang size={35} />
                <IconBrandBootstrap size={35} />
                <IconBrandMysql size={35} />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent" 
                radius={250}
                duration={20}
                delay={0} 
            >
                <IconBrandAws size={40} />
                <IconBrandVercel size={40} />
                <IconBrandRedhat size={40} />
                <IconBrandGatsby size={40} />
            </OrbitingCircles>

        </div>
    );
}