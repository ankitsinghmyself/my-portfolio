"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { FaStackOverflow } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarClass = ` bg-dark text-gray-300 w-full md:w-64  p-4 fixed top-0 left-0 h-full z-50 overflow-y-auto transition-transform duration-300 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  }`;

  const links = [
    { label: "Home", href: "/", icon: MdHome },
    { label: "GitHub", href: "/", icon: VscGithub },
    { label: "Stack overflow", href: "/", icon: FaStackOverflow }
  ];

  return (
    <div className={sidebarClass}>
      {/* Your sidebar content goes here */}
      <button
        onClick={toggleSidebar}
        className="text-gray-300 p-2 focus:outline-none md:hidden"
      >
        Close
      </button>
      <h1 className="text-2xl font-bold mb-4">Ankit Singh</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="flex mb-5 text-gray-300 items-center">
            <Link href={link.href} className="flex">
              {link.icon && <link.icon className="inline mr-2 text-3xl" />}
              <p className="mt-1 ml-2">{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
