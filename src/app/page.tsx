"use client";

import CustomCursor from "@/components/common/CustomCursor";
import ProjectsLayout from "@/components/common/ProjectsLayout";
import Intro from "@/components/Intro";
import PageLayout from "@/components/PageLayout";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { color, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { SiLinkedin } from "react-icons/si";

export default function Home() {
  return (
    <>
      <PageLayout title="Dashboard">
        <Intro />
        <Skills />
        <ProjectsLayout />
        <CustomCursor />
      </PageLayout>
    </>
  );
}
