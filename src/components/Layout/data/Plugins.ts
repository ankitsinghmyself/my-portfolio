import { Project } from "../types";

export const plugins: Project[] = [
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