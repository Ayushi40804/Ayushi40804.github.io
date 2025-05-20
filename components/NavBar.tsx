// D:\Ayushi40804.github.io\components\NavBar.tsx
import React from "react";
import { FloatingDock } from "./ui/floating-dock"; // Corrected import path
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconTrophy,
  IconMail,
  // IconCertificate,
} from "@tabler/icons-react";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        // Changed icon color to even darker for both light and dark mode
        <IconHome className="h-full w-full text-black dark:text-white" />
      ),
      href: "#hero",
    },
    {
      title: "About Me",
      icon: (
        // Changed icon color to even darker for both light and dark mode
        <IconUser className="h-full w-full text-black dark:text-white" />
      ),
      href: "#about-me",
    },
    {
      title: "Experience",
      icon: (
        // Changed icon color to even darker for both light and dark mode
        <IconBriefcase className="h-full w-full text-black dark:text-white" />
      ),
      href: "#experience",
    },
    {
      title: "Achievements",
      icon: (
        // Changed icon color to even darker for both light and dark mode
        <IconTrophy className="h-full w-full text-black dark:text-white" />
      ),
      href: "#achievements",
    },
    {
      title: "Contact",
      icon: (
        // Changed icon color to even darker for both light and dark mode
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