"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose, MdHome } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { FaExternalLinkAlt, FaStackOverflow } from "react-icons/fa";
import { motion } from "framer-motion";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { GoWorkflow } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarList = [
  { label: "Home", href: "/", icon: MdHome, type: "internal" },
  {
    label: "Experience",
    href: "/experience",
    icon: MdWorkOutline,
    type: "internal",
  },
  {
    label: "GitHub",
    href: "https://github.com/ankitsinghmyself",
    icon: VscGithub,
    type: "external",
  },
  // {
  //   label: "Stack overflow",
  //   href: "https://stackoverflow.com/users/11166949/ankit-singh",
  //   icon: FaStackOverflow,
  //   type: "external",
  // },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankitsinghmyself/",
    icon: SiLinkedin,
    type: "external",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1cXjUkPhHm7zFPj0dfIUEFkJ1zwCbPW3-/view?usp=sharing",
    icon: GoWorkflow,
    type: "external",
  },
  {
    label: "About Me",
    href: "/about",
    icon: LiaUserGraduateSolid,
    type: "internal",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarClass = `bg-gray-900  text-gray-300 w-[80%] md:w-64  p-4 fixed top-0 left-0 h-full z-50 overflow-y-auto transition-transform duration-300 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  }`;

  const links = SidebarList;

  return (
    <div className={sidebarClass}>
      <button
        onClick={toggleSidebar}
        className="text-gray-300 p-2 focus:outline-none md:hidden"
      >
        <MdClose />
      </button>
      <h1 className="text-2xl font-bold mb-4">Ankit Singh</h1>
      <ul>
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            target={link.type === "external" ? "_blank" : ""}
            className="flex w-full items-center justify-between mb-5 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center"
            >
              {link.icon && <link.icon className="inline mr-2 text-3xl" />}
              <p className="mt-1 ml-2">{link.label}</p>
              {link.type === "external" && (
                <FaExternalLinkAlt className="inline text-xs ml-2" />
              )}
            </motion.button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
