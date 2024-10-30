"use client";
import Intro from "@/components/Intro";
import ProjectsLayout from "@/components/Layout/ProjectsLayout";
import PageLayout from "@/components/PageLayout";
import React from "react";

export default function page() {
  return (
    <>
      <PageLayout title="Projects">
        <Intro />
        <ProjectsLayout />
      </PageLayout>
    </>
  );
}
