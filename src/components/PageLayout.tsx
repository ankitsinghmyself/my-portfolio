"use client";
import React, { useState } from "react";
import Sidebar from "./Layout/Sidebar";
import CustomCursor from "./common/CustomCursor";
import StarryBackground from "./common/StarryBackground";
import useStarryBackground from "@/hooks/useStarryBackground";
import "./common/StarryBackground.module.css";
import Footer from "./common/Footer";
import { motion } from "framer-motion";
interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  children,
  actions,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useStarryBackground(400);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state for animation
      animate={{ opacity: 1, y: 0 }} // Animation when the component is rendered
      exit={{ opacity: 0, y: 20 }} // Animation when the component is removed
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Mobile Menu Icon */}
        <div className="bg-dark text-gray-300 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-300 p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          className={`bg-dark text-gray-300 flex-1 p-4 ml-0 md:ml-64 ${
            isSidebarOpen ? "opacity-50 fixed" : ""
          }`}
        >
          {/* <div className="hidden mb-4 md:flex md:justify-end md:gap-3 lg:flex lg:justify-end lg:gap-5 lg:items-center">
          <button className="bg-transparent text-white hover:bg-gray-100 hover:text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
            Skills
          </button>
          <button className="bg-transparent text-white hover:bg-gray-100 hover:text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
            Projects
          </button>
        </div> */}
          <div>{children}</div>
          <CustomCursor />
          <StarryBackground />
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default PageLayout;
