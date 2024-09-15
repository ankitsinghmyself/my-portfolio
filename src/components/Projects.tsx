import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  techstack: TechStack[];
  githubUrl: string;
  requiresMobileView: boolean;
  demoUrl: string;
}
interface TechStack {
  label: string;
  color: string;
}
interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  color: string;
}
const Chip: React.FC<ChipProps> = ({ label, color }) => (
  <div
    className={`mr-1 flex items-center justify-between rounded-md bg-gray-50 px-2 text-[10px] font-normal normal-case  text-gray-400 shadow-none
       transition-opacity duration-300 ease-linear hover:!shadow-none border-[1px] `}
    data-te-close="true"
    style={{
      borderColor: `${color}`,
    }}
  >
    {label}
  </div>
);
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "eShop",
      description:
        "eShop is an e-commerce website with Admin panel that utilizes Redux, Prisma, Chart.js, and NextAuth with Google for enhanced functionality and user authentication.",
      image: "/projects/eshop.png",
      techstack: [
        {
          label: "NextJS",
          color: "#00D0B8",
        },
        {
          label: "Prisma",
          color: "#007ACC",
        },
        {
          label: "MUI 5",
          color: "#00B8D9",
        },
        {
          label: "TS",
          color: "#61dafb",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/eshop",
      requiresMobileView: false,
      demoUrl: "https://eshop-ankitsinghmyself.vercel.app/",
    },
    {
      title: "UI Templates",
      description:
        "A website template using React, Next.js, TypeScript, Chakra UI, and CSS, providing Developer-Friendly UI Templates for Instant Deployment.",
      image: "/uiTemplates.png",
      techstack: [
        {
          label: "NextJS",
          color: "#00D0B8",
        },
        {
          label: "TS",
          color: "#007ACC",
        },
        {
          label: "Chakra UI",
          color: "#00B8D9",
        },
        {
          label: "CSS",
          color: "#61dafb",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/ui-templates",
      requiresMobileView: false,
      demoUrl: "https://ui-templates-zeta.vercel.app/",
    },
    {
      title: "Travel Website Sample",
      description:
        "A sleek and responsive user experience is delivered through a sample portfolio website crafted using Next.js, TypeScript, and Tailwind CSS",
      image: "/travel.png",
      techstack: [
        {
          label: "NextJS",
          color: "#00D0B8",
        },
        {
          label: "TS",
          color: "#007ACC",
        },
        {
          label: "MUI 5",
          color: "#00B8D9",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/travel-website",
      requiresMobileView: false,
      demoUrl: "https://travel-website-sample-ten.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A stylish weather app made with ReactJS, leveraging the OpenWeatherMap API for precise forecasts.",
      image: "/weather.png",
      techstack: [
        {
          label: "ReactJS",
          color: "#00D0B8",
        },
        {
          label: "TS",
          color: "#007ACC",
        },
        {
          label: "CSS",
          color: "#61dafb",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/react-weather-app",
      requiresMobileView: false,
      demoUrl: "https://react-weather-app-made-by-ankit.vercel.app/",
    },
    {
      title: "Chatify",
      description:
        "A social media application built with Next.js and seamlessly integrated with Firebase for user authentication.",
      image: "/chatify.png",
      techstack: [
        {
          label: "NextJS",
          color: "#00D0B8",
        },
        {
          label: "Socket.IO",
          color: "#007ACC",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/Chatify",
      requiresMobileView: false,
      demoUrl: "",
    },
    {
      title: "Covid19",
      description:
        "Covid-19 is a React Native app that shows the current status of the COVID-19 pandemic in India.",
      image: "/projects/covid.png",
      techstack: [
        {
          label: "React Native",
          color: "#00D0B8",
        },
        {
          label: "TS",
          color: "#007ACC",
        },
        {
          label: "Android",
          color: "#61dafb",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/covid-19",
      requiresMobileView: false,
      demoUrl: "",
    },

    {
      title: "Eurecab Mobile App",
      description:
        "Eurcab is based in France and from this mobile application, people are able to search cab/taxi and book it.",
      image: "/projects/eurecab.png",
      techstack: [
        {
          label: "React Native",
          color: "#00D0B8",
        },
        {
          label: "Android",
          color: "#007ACC",
        },
        {
          label: "iOS",
          color: "#61dafb",
        },
      ],
      githubUrl: "",
      requiresMobileView: false,
      demoUrl: "https://apps.apple.com/fr/app/eurecab/id1295787129",
    },
    {
      title: "The Wellness Shop",
      description:
        "Developed the website from scratch and responsible for Front-end and Back-end development coding and managing CRM under senior developers.",
      image: "/projects/wellness.png",
      techstack: [
        {
          label: "HTML",
          color: "#00D0B8",
        },
        {
          label: "JS",
          color: "#007ACC",
        },
        {
          label: "CSS",
          color: "#61dafb",
        },
      ],
      githubUrl: "",
      requiresMobileView: false,
      demoUrl: "https://www.thewellnessshop.in/",
    },
    {
      title: "Game Masti",
      description:
        "Game Masti is an engaging and interactive platform developed using Next.js, Redux, and MUI 5. The app features a seamless user authentication experience with NextAuth, supporting both Google authentication and OTP-based login. Real-time updates are powered by WebSockets, enhancing the dynamic gameplay and user interaction. Dive into a world of fun and excitement with Game Masti, available now on the Google Play Store.",
      image: "/projects/gamemasti.png",
      techstack: [
        {
          label: "NextJS",
          color: "#00D0B8",
        },
        {
          label: "Redux Toolkit",
          color: "#007ACC",
        },
        {
          label: "MUI 5",
          color: "#00B8D9",
        },
      ],
      githubUrl: "",
      requiresMobileView: true,
      demoUrl: "https://games.abplive.com/",
    },
    {
      title: "Portfolio Showcase",
      description:
        "A portfolio website built with Next.js and Sanity.io, showcasing sample projects and work.",
      image: "/projects/samplePortfolio1.png",
      techstack: [
        {
          label: "NextJS",
          color: "#00D0B8",
        },
        {
          label: "Sanity.io",
          color: "#007ACC",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/sample-portfolio1",
      requiresMobileView: false,
      demoUrl: "https://ankitsinghmyself1.vercel.app/",
    },
  ];
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
      <div className="py-5 md:py-5 grid grid-cols-1 gap-4">
        <p className="text-white text-2xl font-bold">Projects</p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              height: "300px",
              backgroundColor: "#fff",
              borderRadius: "12px",
            }}
          >
            <div className="rounded-t-md overflow-hidden relative">
              <div
                onClick={() =>
                  handleDemoClick(project.demoUrl, project.requiresMobileView)
                }
                className="opacity-95 w-full h-40 bg-slate-200"
                style={{
                  aspectRatio: "1 / 1",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
              />
              <div className="p-5 bg-white rounded-b-md overflow-hidden">
                <div className="flex items-baseline justify-between">
                  <h5 className="mb-2 text-md font-bold text-black">
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
                        className="text-xs font-normal text-black mr-2"
                      >
                        <FaExternalLinkAlt />
                      </button>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-normal text-black mr-2"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-space-between">
                  {project.techstack.map((tech, index) => (
                    <Chip key={index} label={tech.label} color={tech.color} />
                  ))}
                </div>
                <p className="text-xs font-normal text-black text-justify line-clamp-3">
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
