import React, { useState } from "react";
import Projects from "../Projects";
import { FaProjectDiagram } from "react-icons/fa";
import { BsPlugin } from "react-icons/bs";
import CustomButton from "../common/CustomButton";
import { projects } from "./data/Projects";
import { plugins } from "./data/Plugins";

const ProjectsLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  return (
    <div className="py-5 md:py-5">
      <div className="flex space-x-4 mb-4">
        <CustomButton
          label="Projects"
          icon={FaProjectDiagram}
          onClick={() => setActiveTab("tab1")}
          className={`relative ${
            activeTab === "tab1"
              ? "bg-red-400 text-white"
              : "bg-gray-700 text-gray-300"
          } transition duration-300 rounded-md`}
        />
        <CustomButton
          label="Plugins"
          icon={BsPlugin}
          onClick={() => setActiveTab("tab2")}
          className={`relative ${
            activeTab === "tab2"
              ? "bg-red-400 text-white"
              : "bg-gray-700 text-gray-300"
          } transition duration-300 rounded-md`}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {activeTab === "tab1" && (
          <>
            <div className="text-white text-2xl font-bold">Projects</div>
            <Projects projects={projects} />
          </>
        )}
        {activeTab === "tab2" && (
          <>
            <div className="text-white text-2xl font-bold">Plugins</div>
            <Projects projects={plugins} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectsLayout;
