import React from "react";
import CustomChip from "./common/LargeChip";
import { motion } from "framer-motion";

// Animation Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.2,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

interface SkillCategoryProps {
  title: string;
  chips: { label: string; color: string }[];
}

// Wrap SkillCategory with motion for animation
const SkillCategory: React.FC<SkillCategoryProps> = ({ title, chips }) => (
  <motion.div
    className="max-w-md w-full bg-gray-800 rounded-md shadow dark:border-gray-700"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div style={{ padding: "1.25rem" }}>
      <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
        {title}
      </h5>
      <div className="flex flex-wrap">
        {chips.map((skill, index) => (
          <motion.div key={index} variants={chipVariants}>
            <CustomChip label={skill.label} color={skill.color} />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
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
    { label: "Kubernetes", color: "green" },
    { label: "AWS", color: "green" },
  ];

  return (
    <div className="py-5 md:py-5 grid grid-cols-1 gap-4">
      <motion.div
        className="max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-white text-2xl font-bold">What I know</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {frontendSkills && (
          <SkillCategory title="Frontend" chips={frontendSkills} />
        )}
        {backendSkills && (
          <SkillCategory title="Backend" chips={backendSkills} />
        )}
        {databaseSkills && (
          <SkillCategory title="Database" chips={databaseSkills} />
        )}
        {devopsSkills && <SkillCategory title="DevOps" chips={devopsSkills} />}
      </div>
    </div>
  );
};

export default Skills;
