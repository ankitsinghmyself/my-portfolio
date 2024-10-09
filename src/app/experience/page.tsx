"use client";
import LargeChip from "@/components/common/LargeChip";
import Intro from "@/components/Intro";
import PageLayout from "@/components/PageLayout";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Lowe's Companies, Inc.",
      role: "Software Engineer",
      period: "Jul 2023 - Present",
      details: [
        "Accelerated ReactJS frontend data loading by 25%, enhancing user experience.",
        "Elevated customer satisfaction by 30% through captivating and responsive Material UI designs.",
        "Implemented Git and Bitrise for seamless CI/CD, ensuring efficient workflows.",
      ],
      technologies: [
        { label: "ReactJS", color: "blue" },
        { label: "Material UI", color: "red" },
        { label: "Git", color: "yellow" },
        { label: "Bitrise", color: "green" },
      ],
    },
    {
      company: "Skills Outsource Think Pvt Ltd",
      role: "Software Engineer",
      period: "Nov 2021 - Jul 2023",
      details: [
        "Boosted mobile app performance by 20% using JavaScript, Angular, and React Native.",
        "Enhanced testing efficiency by 15% with REST/JSON API development and Jest.",
        "Optimized performance by 25% using Node.js, Express, Docker, Redis, and MySQL.",
      ],
      technologies: [
        { label: "JavaScript", color: "blue" },
        { label: "React Native", color: "red" },
        { label: "Jest", color: "yellow" },
        { label: "Node.js", color: "green" },
        { label: "Redis", color: "green" },
        { label: "Docker", color: "red" },
      ],
    },
    {
      company: "GlobalShiksha India Pvt Ltd",
      role: "Software Engineer",
      period: "Aug 2020 - Oct 2021",
      details: [
        "Awarded Best Determination for Work, boosting task completion by 20%.",
        "Developed MERN app for Skishka, improving data retrieval by 25%.",
        "Enhanced website features, improving customer experience by 15%.",
      ],
      technologies: [
        { label: "MERN Stack", color: "blue" },
        { label: "Material UI", color: "red" },
        { label: "CMS", color: "yellow" },
      ],
    },
    {
      company: "Careerlabs Technologies Pvt Ltd",
      role: "Software Engineer Intern",
      period: "Dec 2019 - May 2020",
      details: [
        "Created and managed a ReactJS and Node.js web chat app, boosting efficiency by 20%.",
        "Implemented Python, ML, and AI for PDF data extraction and RASA chatbots, enhancing automation by 25%.",
        "Collaborated on user-friendly interfaces, contributing to a 15% increase in usability.",
        "Followed agile practices for a 20% faster project delivery.",
      ],
      technologies: [
        { label: "ReactJS", color: "blue" },
        { label: "Python", color: "red" },
        { label: "Machine Learning", color: "yellow" },
        { label: "RASA Chatbots", color: "yellow" },
        { label: "Node.js", color: "yellow" },
      ],
    },
  ];

  return (
    <PageLayout title="Experience">
      <Intro />
      <div className=" min-h-screen text-gray-100">
        <div className="py-5 md:py-5 grid grid-cols-1 gap-4">
          <p className="text-white text-2xl font-bold">Experience</p>
        </div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              {exp.company}
            </h3>
            <p className="text-gray-400">
              {exp.role} | {exp.period}
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="mt-4 block md:flex">
              <strong className="text-gray-400 mt-2 mr-2">
                Technologies Used:
              </strong>
              <div className="flex flex-wrap">
                {exp.technologies.map((skill, index) => (
                  <LargeChip
                    key={index}
                    label={skill.label}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Experience;
