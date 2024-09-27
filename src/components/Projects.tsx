import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SmallChip from "./comman/SmallChip";
import { Project } from "./comman/ProjectsLayout";

interface ProjectsProps {
  projects: Project[]; // Array of Project objects
}


const Projects: React.FC<ProjectsProps> = ({projects}) => {
  
  const openInMobileView = (url: string) => {
    const width = 375; // Width of an iPhone X
    const height = 667; // Height of an iPhone X
    window.open(
      url,
      "_blank",
      `width=${width},height=${height},toolbar=no,menubar=no,scrollbars=yes`
    );
  };

  const handleDemoClick = (url: string, requiresMobileView: boolean) => {
    if (requiresMobileView) {
      openInMobileView(url);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div className="">

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              height: "300px",
              backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity)",
              borderRadius: "12px",
            }}
          >
            <div className="rounded-t-md overflow-hidden relative">
              <div
                onClick={() =>
                  handleDemoClick(project.demoUrl || project.githubUrl, project.requiresMobileView)
                }
                className="opacity-95 w-full h-40 bg-gray-700"
                style={{
                  aspectRatio: "1 / 1",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
              />
              <div className="p-5 bg-gray-800 rounded-b-md overflow-hidden">
                <div className="flex items-baseline justify-between">
                  <h5 className="mb-2 text-md font-bold ">
                    {project.title}
                  </h5>
                  <div className="flex items-center justify-between">
                    {project.demoUrl && (
                      <button
                        onClick={() =>
                          handleDemoClick(
                            project.demoUrl,
                            project.requiresMobileView
                          )
                        }
                        className="text-xs font-normal  mr-2"
                      >
                        <FaExternalLinkAlt />
                      </button>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-normal  mr-2"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-space-between">
                  {project.techstack.map((tech, index) => (
                    <SmallChip key={index} label={tech.label} color={tech.color} />
                  ))}
                </div>
                <p className="text-xs font-normal  text-justify line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
