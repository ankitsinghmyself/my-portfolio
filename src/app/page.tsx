"use client";

import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
export default function Home() {
  return (
    <>
      <PageLayout title="Dashboard">
        <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-r from-gray-500 to-red-500 rounded-md">
          <div className="col-span-2  flex items-center ">
            <Image
              src="/ankit.jpg"
              alt="Profile Pic"
              width={100}
              height={100}
              className=" rounded-full border-white border-4 border-solid"
            />
            <div className="ml-5 flex flex-col ">
              <h3 className="text-2xl font-bold text-gray-300">Ankit Singh</h3>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>
          <div className="flex flex-row  align-middle items-center ">
            <div className="mr-5 flex ">
              <Link
                href={"https://www.linkedin.com/in/ankitsinghmyself/"}
                target="_blank"
                className="rounded-full border-white border-2  bg-black text-gray-300 py-2 px-4"
              >
                <div className="flex align-middle items-center">
                  <SiLinkedin className="w-5 h-5 mr-2" />
                  <p className="text-sm">Follow me on LinkedIn</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-5 md:p-10 -mb-10 grid grid-cols-1 gap-4  ">
          <p className="text-white text-2xl font-bold">Projects</p>
        </div>
        <div className="p-5  md:p-10 grid grid-cols-1 md:grid-cols-4 gap-4  ">
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="ankit.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-400 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="ankit.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-400 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="ankit.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-400 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="/ankit.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-400 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>

        {/* what i know */}
        <div className="p-5 md:p-10 -mb-10 grid grid-cols-1 gap-4  ">
          <p className="text-white text-2xl font-bold">What I know</p>
        </div>
        <div className="p-5  md:p-10 grid grid-cols-1 md:grid-cols-5 gap-4  ">
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
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
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
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
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
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
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
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
