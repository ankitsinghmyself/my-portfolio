"use client";

import CustomButton from "@/components/comman/CustomButton";
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

export default function About() {
  return (
    <>
      <PageLayout title="About ME">
        <Intro />
        <div className="py-5 md:py-5 grid grid-cols-1 gap-4">
          <p className="text-white text-2xl font-bold">About Me</p>
        </div>
        <div className="flex items-center justify-center">
          <div className=" w-full bg-gray-800 rounded-md shadow dark:border-gray-700 p-8 md:flex md:items-center  ">
            {/* Content */}
            <div className="mt-4 md:mt-0">
              <p className="text-lg ">
                I&apos;m a passionate and dedicated software engineer who loves
                coding, learning new things, and spending time in nature. I have
                over four years of experience in developing web applications
                using technologies like{" "}
                <span className="font-semibold text-blue-600">ReactJS</span> and
                <span className="font-semibold text-blue-600"> Node.js</span>.
              </p>
              <p className="text-lg  mt-2">
                I thrive in peaceful environments, always looking for ways to
                combine creativity and technology to solve problems. My
                expertise in frontend technologies like{" "}
                <span className="font-semibold text-blue-600">JavaScript</span>,{" "}
                <span className="font-semibold text-blue-600">TypeScript</span>,{" "}
                <span className="font-semibold text-blue-600">Next.js</span>,
                and{" "}
                <span className="font-semibold text-blue-600">Material UI</span>{" "}
                allows me to create user-friendly and intuitive interfaces.
              </p>

              <div className="flex space-x-4 mt-6">
                <div className="flex flex-col items-center md:items-start">
                  <CustomButton
                    label="Follow me on LinkedIn"
                    icon={SiLinkedin}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/ankitsinghmyself/",
                        "_blank"
                      )
                    }
                  />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <CustomButton
                    label="Email"
                    icon={MdEmail}
                    onClick={() =>
                      window.open("mailto:ankitsinghmyself@gmail.com", "_blank")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
