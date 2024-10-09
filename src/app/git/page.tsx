"use client";

import CustomButton from "@/components/common/CustomButton";
import ExternalSite from "@/components/common/ExternalSite";
import Intro from "@/components/Intro";
import PageLayout from "@/components/PageLayout";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { color, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { SiGmail, SiLinkedin } from "react-icons/si";

export default function Git() {
  return (
    <>
      <PageLayout title="About ME">
        <Intro />
        <ExternalSite url={"https://github.com/ankitsinghmyself"}/>
      </PageLayout>
    </>
  );
}
