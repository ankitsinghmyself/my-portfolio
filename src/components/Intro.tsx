import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import CustomButton from "./comman/CustomButton";

const Intro: React.FC = () => {
  return (
    <div className="p-5 md:px-10 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-500 to-red-500 rounded-md">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-5 md:mb-0">
        <img
          src="/ankit.png"
          alt="Profile Pic"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-white border-4 border-solid"
        />
        <p className="text-sm text-white text-center md:text-left">
          <span className="text-2xl md:text-3xl font-bold text-white mb-2 block">
            Ankit Singh
          </span>
          Software Engineer
        </p>
      </div>
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
    </div>
  );
};

export default Intro;
