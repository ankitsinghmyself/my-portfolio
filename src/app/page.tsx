"use client";

import PageLayout from "@/components/PageLayout";
import { color, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SiLinkedin } from "react-icons/si";
export default function Home() {
  const project = [
    {
      title: "Dashboard App",
      description: "A dashboard application built with React and Material UI",
      image: "/admin_dashboard.jpg",
      url: "https://admin-dashboard-react-eta.vercel.app/",
    },
    {
      title: "Top Weather App",
      description:
        "A weather application built with ReactJS and OpenWeatherMap API",
      image: "/weather.png",
      url: "https://react-weather-app-made-by-ankit.vercel.app/",
    },
    {
      // title: "Social App",
      title: "Coming Soon...",
      description: "A social media app built with React, Redux and Firebase",
      image: "/admin_dashboard.jpg",
      url: "/",
    },
    {
      // title: "Ecommerce Website",
      title: "Coming Soon...",
      description:
        "An ecommerce website to sell products built with Next.js, Stripe and MongoDB",
      image: "/admin_dashboard.jpg",
      url: "/",
    },
  ];
  return (
    <>
      <PageLayout title="Dashboard">
        <div className="p-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-r from-gray-500 to-red-500 rounded-md">
          <div className="col-span-2  flex items-center ">
              <img
                src="/ankit.png"
                alt="Profile Pic"
                className=" w-1/5 h-auto rounded-full border-white border-4 border-solid"
              />
            <div className="ml-5 flex flex-col ">
              <h3 className="text-3xl font-bold text-white">Ankit Singh</h3>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>
          <div className="flex flex-row  align-middle items-center justify-end ">
            <div className="mr-5 flex ">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.linkedin.com/in/ankitsinghmyself/",
                    "_blank"
                  );
                }}
                className="rounded-full border-white border-2  bg-black text-gray-300 py-2 px-4"
              >
                <div className="flex align-middle items-center">
                  <SiLinkedin className="w-5 h-5 mr-2" />
                  <p className="text-sm">Follow me on LinkedIn</p>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="p-5 md:p-10 -mb-10 grid grid-cols-1 gap-4  ">
          <p className="text-white text-2xl font-bold">Projects</p>
        </div>

        <div className="p-5  md:p-10 grid grid-cols-1 md:grid-cols-4 gap-4  ">
          {project.map((item, index) => (
            <div key={index} className="">
              <div className="rounded-t-xl overflow-hidden relative">
                <a href={item.url} target="_blank">
                  <img
                    className="opacity-80 w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                    height={200}
                    width={500}
                    style={{
                      width: "100%",
                      aspectRatio: 1 / 1,
                      height: "170px",
                      objectFit: "cover",
                    }}
                  />
                   {/* <div className="overlay-text absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <h5 className="mb-2 text-md font-bold text-white">{item.title}</h5>
                    </div> */}
                </a>
                <div className="p-5 bg-white  rounded-b-xl overflow-hidden">
                  <a href={item.url}>
                    <h5 className="mb-2 text-md font-bold text-black">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 text-xs font-normal text-black ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* what i know */}
        <div className="p-5 md:p-10 -mb-10 grid grid-cols-1 gap-4  ">
          <p className="text-white text-2xl font-bold">What I know</p>
        </div>
        <div className="p-5  md:p-10 grid grid-cols-1 md:grid-cols-5 gap-4  ">
          <div className="max-w-sm bg-gray-800   rounded-lg shadow  dark:border-gray-700">
            <div className="p-5">
              <h5 className="mb-2 text-[1.125rem] font-medium tracking-tight text-white">
                Frontend
              </h5>
              <div className="flex flex-wrap">
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] border-blue-400 border-[1px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  HTML
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  CSS
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  Tailwind
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] border-blue-400 border-[1px] items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  Javascript
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  Typescript
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] border-red-400 border-[1px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  React Js
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] border-red-300 border-[1px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  NextJS 13
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800  rounded-lg shadow  dark:border-gray-700">
            <div className="p-5">
              <h5 className="mb-2 text-[1.125rem] font-medium tracking-tight text-white">
                Backend
              </h5>
              <div className="flex flex-wrap">
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] border-orange-400 border-[1px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  Node Js
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  Express Js
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800  rounded-lg shadow  dark:border-gray-700">
            <div className="p-5">
              <h5 className="mb-2 text-[1.125rem] font-medium tracking-tight text-white">
                Database
              </h5>
              <div className="flex flex-wrap">
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] border-yellow-400 border-[1px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  MySql
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  MongoDB
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800  rounded-lg shadow  dark:border-gray-700">
            <div className="p-5">
              <h5 className="mb-2 text-[1.125rem] font-medium tracking-tight text-white">
                Devops
              </h5>
              <div className="flex flex-wrap">
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] border-green-400 border-[1px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  Git
                </div>
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px]  items-center justify-between rounded-md bg-dark px-[8px] py-0 text-[.75rem] font-normal normal-case leading-loose text-gray-400 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none "
                  data-te-close="true"
                >
                  Docker
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
