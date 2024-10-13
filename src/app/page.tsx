"use client";

import CustomCursor from "@/components/common/CustomCursor";
import ProjectsLayout from "@/components/Layout/ProjectsLayout";
import Intro from "@/components/Intro";
import PageLayout from "@/components/PageLayout";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { color, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { SiLinkedin } from "react-icons/si";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {" "}
        <PageLayout title="Dashboard">
          <Intro />
          <Skills />
          <ProjectsLayout />
        </PageLayout>
      </motion.div>
    </>
  );
}
