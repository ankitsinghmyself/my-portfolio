import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "UI Templates",
      description:
        "A website template using React, Next.js, TypeScript, Chakra UI, and CSS, providing Developer-Friendly UI Templates for Instant Deployment.",
      image: "/uiTemplates.png",
      url: "https://ui-templates-zeta.vercel.app/",
    },
    {
      title: "Travel Website Sample",
      description:
        "A sleek and responsive user experience is delivered through a sample portfolio website crafted using Next.js, TypeScript, and Tailwind CSS",
      image: "/travel.png",
      url: "https://travel-website-sample-ten.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A stylish weather app made with ReactJS, leveraging the OpenWeatherMap API for precise forecasts.",
      image: "/weather.png",
      url: "https://react-weather-app-made-by-ankit.vercel.app/",
    },
    {
      title: "Chatify",
      description:
        "A social media application built with Next.js and seamlessly integrated with Firebase for user authentication.",
      image: "/chatify.png",
      url: "https://github.com/ankitsinghmyself/chatify",
    },
    {
      title: "Covid19",
      description:
        "Covid-19 is a React Native app that shows the current status of the COVID-19 pandemic in India.",
      image: "/projects/covid.png",
      url: "https://github.com/ankitsinghmyself/React-Native-App-Covid19",
    },
    {
      title: "eShop",
      description:
        "eShop is an e-commerce website with Admin panel that utilizes Redux, Prisma, Chart.js, and NextAuth with Google for enhanced functionality and user authentication.",
      image: "/projects/eshop.png",
      url: "https://github.com/ankitsinghmyself/eshop",
    },
  ];

  return (
    <div>
      <div className="py-5 md:py-5 grid grid-cols-1 gap-4">
        <p className="text-white text-2xl font-bold">Projects</p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div key={index} style={{ height: "300px", backgroundColor: "#fff", borderRadius: "12px" }}>
            <div className="rounded-t-md overflow-hidden relative">
              <a target="_blank" href={project.url} rel="noopener noreferrer">
                <div
                  className="opacity-95 w-full h-40 bg-slate-200"
                  style={{
                    aspectRatio: "1 / 1",
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </a>
              <div className="p-5 bg-white rounded-b-md overflow-hidden">
                <a href={project.url}>
                  <h5 className="mb-2 text-md font-bold text-black">{project.title}</h5>
                </a>
                <p className="text-xs font-normal text-black text-justify">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
