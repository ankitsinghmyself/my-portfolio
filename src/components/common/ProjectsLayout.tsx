import React, { useState } from "react";
import Projects from "../Projects";
import CustomButton from "./CustomButton";
import { FaProjectDiagram } from "react-icons/fa";
import { BsPlugin } from "react-icons/bs";
export interface Project {
  title: string;
  description: string;
  image: string;
  techstack: TechStack[];
  githubUrl: string;
  requiresMobileView: boolean;
  isDownload: boolean;
  demoUrl: string;
}
export interface TechStack {
  label: string;
  color: string;
}
const ProjectsLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const projects: Project[] = [
    {
      title: "AI Object Detection App",
      description:
        "This application utilizes TensorFlow.js and the COCO-SSD model to detect objects in real time through your webcam. The detected objects are displayed on a canvas overlaying the video feed, and the app can audibly announce the detected objects.",
      image: "/projects/imgAi.webp",
      techstack: [
        {
          label: "ReactJS",
          color: "#00D0B8",
        },
        {
          label: "TensorFlow.js",
          color: "#00B8D9",
        },
        {
          label: "COCO-SSD",
          color: "#61dafb",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/object-detection",
      requiresMobileView: false,
      isDownload: false,
      demoUrl: "https://object-detection-lac-kappa.vercel.app/",
    },
    {
      title: "File Extractor App",
      description:
        "The File Extractor App allows users to copy and move files from deeply nested directory structures efficiently. Users can easily navigate through multiple layers of folders to select files for extraction. The app provides the flexibility to choose the destination folder for the extracted files, ensuring seamless organization and management of data. A user-friendly Tkinter-based interface simplifies the file-handling process for all users.",
      image: "/projects/imgFileExtractor.webp",
      techstack: [
        {
          label: "Executable",
          color: "#ff3344",
        },
        {
          label: "Python",
          color: "#306998",
        },
        {
          label: "Windows",
          color: "#0C4B33",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/file_extractor",
      requiresMobileView: false,
      isDownload: true,
      demoUrl: "https://shorturl.at/aJwBu",
    },
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
      isDownload: false,

      demoUrl: "https://eshop-ankitsinghmyself.vercel.app/",
    },
    {
      title: "UI Templates",
      description:
        "A website template using React, Next.js, TypeScript, Chakra UI, and CSS, providing Developer-Friendly UI Templates for Instant Deployment.",
      image: "/projects/uiTemplates.png",
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
      isDownload: false,

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
      isDownload: false,

      demoUrl: "https://travel-website-sample-ten.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A stylish weather app made with ReactJS, leveraging the OpenWeatherMap API for precise forecasts.",
      image: "/projects/weather.png",
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
      isDownload: false,

      demoUrl: "https://react-weather-app-made-by-ankit.vercel.app/",
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
      githubUrl: "https://github.com/ankitsinghmyself/React-Native-App-Covid19",
      requiresMobileView: false,
      isDownload: false,

      demoUrl: "",
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
      isDownload: false,
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
      isDownload: false,

      demoUrl: "https://ankitsinghmyself1.vercel.app/",
    },
  ];
  const plugins: Project[] = [
    {
      title: "Image Extractor",
      description:
        "This plugin allows users to easily extract or download images from any website. It features a green button located at the top right corner of each image element for quick access.",
      image: "/plugins/plugin1.png",
      techstack: [
        {
          label: "JavaScript",
          color: "#00D0B8",
        },
        {
          label: "json",
          color: "#007ACC",
        },
      ],
      githubUrl: "https://github.com/ankitsinghmyself/chrome-plugins",
      requiresMobileView: false,
      isDownload: false,
      demoUrl: "",
    },
  ];
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
