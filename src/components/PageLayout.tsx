"use client";
import React, { useState } from "react";
import Sidebar from "./Layout/Sidebar";

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
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
      <div className={`bg-dark text-gray-300 flex-1 p-4 ml-0 md:ml-64 `}>
        {/*<div className="mb-4 lg:flex lg:justify-between lg:items-center">
                <div className="lg:w-2/3">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <div>{actions}</div>
                </div>
                <div className="lg:w-1/3">
                    Empty div to push content to the right in large screens
                </div> 
            </div>*/}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
