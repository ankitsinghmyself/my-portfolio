"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose, MdHome } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { FaStackOverflow } from "react-icons/fa";
import { motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarClass = ` bg-dark text-gray-300 w-[80%] md:w-64  p-4 fixed top-0 left-0 h-full z-50 overflow-y-auto transition-transform duration-300 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  }`;

  const links = [
    { label: "Home", href: "/", icon: MdHome },
    {
      label: "GitHub",
      href: "https://github.com/ankitsinghmyself",
      icon: VscGithub,
    },
    {
      label: "Stack overflow",
      href: "https://stackoverflow.com/users/11166949/ankit-singh",
      icon: FaStackOverflow,
    },
  ];

  return (
    <div className={sidebarClass}>
      {/* Your sidebar content goes here */}
      <button
        onClick={toggleSidebar}
        className="text-gray-300 p-2 focus:outline-none md:hidden"
      >
        <MdClose />
      </button>
      <h1 className="text-2xl font-bold mb-4">Ankit Singh</h1>
      <ul>
        {links.map((link, index) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={index}
            className="flex mb-5 text-gray-300 items-center"
          >
            <Link href={link.href} target="_blank" className="flex">
              {link.icon && <link.icon className="inline mr-2 text-3xl" />}
              <p className="mt-1 ml-2">{link.label}</p>
            </Link>
          </motion.button>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
