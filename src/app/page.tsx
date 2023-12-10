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
        <div className="p-5 md:p-10 grid grid-cols-1 gap-4  ">
          <p>Projects</p>
        </div>
        <div className="p-5  md:p-10 grid grid-cols-1 md:grid-cols-4 gap-4  ">
          <div className="  flex items-center ">
            <div className="col-span-1">
              <ul className="list-disc pl-5">
                <li>Project 1</li>
              </ul>
            </div>
          </div>
          <div className="  flex items-center ">
            <div className="col-span-1">
              <ul className="list-disc pl-5">
                <li>Project 1</li>
              </ul>
            </div>
          </div>
          <div className="  flex items-center ">
            <div className="col-span-1">
              <ul className="list-disc pl-5">
                <li>Project 1</li>
              </ul>
            </div>
          </div>
          <div className="  flex items-center ">
            <div className="col-span-1">
              <ul className="list-disc pl-5">
                <li>Project 1</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-5 md:p-10 grid grid-cols-1 gap-4  ">
          <p>What I know</p>
        </div>
        <div className="p-5  md:p-10 grid grid-cols-1 md:grid-cols-4 gap-4  ">
          <div className="  flex items-center ">
            <div className="col-span-1">
              <ul className="list-disc pl-5">
                <li>Frontend</li>
              </ul>
            </div>
          </div>
          <div className="  flex items-center ">
            <div className="col-span-1">
              <ul className="list-disc pl-5">
                <li>Backend</li>
              </ul>
            </div>
          </div>
          <div className="  flex items-center ">
            <div className="col-span-1">
              <ul className="list-disc pl-5">
                <li>Database</li>
              </ul>
            </div>
          </div>
          <div className="  flex items-center ">
            <div className="col-span-1">
              <ul className="list-disc pl-5">
                <li>Devops</li>
              </ul>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
