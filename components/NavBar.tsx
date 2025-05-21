import React from "react";
import { FloatingDock } from "./ui/floating-dock"; 
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconTrophy,
  IconMail,
} from "@tabler/icons-react";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-black dark:text-white" />
      ),
      href: "#hero",
    },
    {
      title: "About Me",
      icon: (
        <IconUser className="h-full w-full text-black dark:text-white" />
      ),
      href: "#about-me",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-black dark:text-white" />
      ),
      href: "#experience",
    },
    {
      title: "Achievements",
      icon: (
        <IconTrophy className="h-full w-full text-black dark:text-white" />
      ),
      href: "#achievements",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-black dark:text-white" />
      ),
      href: "#socials",
    },
  ];

  return (
    <div className="relative z-[100]">
      <FloatingDock
        items={links}
      />
    </div>
  );
}

export default NavBar;