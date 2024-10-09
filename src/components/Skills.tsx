import React from "react";
import CustomChip from "./common/LargeChip";




interface SkillCategoryProps {
  title: string;
  chips: { label: string; color: string }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, chips }) => (
  <div className="max-w-md w-full bg-gray-800 rounded-md shadow dark:border-gray-700">
    <div
      style={{
        padding: "1.25rem 0 1.25rem  1.25rem  ",
      }}
    >
      <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
        {title}
      </h5>
      <div className="flex flex-wrap">
        {chips.map((skill, index) => (
          <CustomChip key={index} label={skill.label} color={skill.color} />
        ))}
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const frontendSkills = [
    { label: "HTML", color: "blue" },
    { label: "CSS", color: "blue" },
    { label: "Tailwind", color: "blue" },
    { label: "JavaScript", color: "orange" },
    { label: "TypeScript", color: "blue" },
    { label: "React JS", color: "red" },
    { label: "NextJS 14", color: "red" },
    { label: "Socket.IO", color: "red" },
    { label: "React Native", color: "green" },
  ];

  const backendSkills = [
    { label: "Node JS", color: "orange" },
    { label: "Express JS", color: "orange" },
    { label: "Socket.IO", color: "red" },
  ];

  const databaseSkills = [
    { label: "MySQL", color: "yellow" },
    { label: "MongoDB", color: "yellow" },
    { label: "Prisma", color: "red" },
  ];

  const devopsSkills = [
    { label: "Git", color: "green" },
    { label: "Docker", color: "green" },
  ];

  return (
    <div className="py-5 md:py-5 grid grid-cols-1 gap-4">
      <p className="text-white text-2xl font-bold">What I know</p>

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {frontendSkills && (
          <SkillCategory title="Frontend" chips={frontendSkills} />
        )}
        {backendSkills && (
          <SkillCategory title="Backend" chips={backendSkills} />
        )}
        {databaseSkills && (
          <SkillCategory title="Database" chips={databaseSkills} />
        )}
        {devopsSkills && <SkillCategory title="Devops" chips={devopsSkills} />}
      </div>
    </div>
  );
};

export default Skills;
