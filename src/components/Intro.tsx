import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";

const Intro: React.FC = () => {
  return (
    <div className="p-5 md:px-10 flex items-center justify-between bg-gradient-to-r from-gray-500 to-red-500 rounded-md">
      <div className="flex  items-center  justify-center gap-4">
        <img
          src="/ankit.png"
          alt="Profile Pic"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-white border-4 border-solid mb-3 md:mb-0"
        />
        <p className="text-sm text-white mb-4">
          <span className="text-3xl font-bold text-white mb-2 block">Ankit Singh</span>
          Software Engineer
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ankitsinghmyself/",
              "_blank"
            )
          }
          className="rounded-[12px] border-white border-2 bg-black text-gray-300 py-2 px-4 flex items-center"
        >
          <SiLinkedin className="w-5 h-5 mr-2" />
          <p className="text-sm">Follow me on LinkedIn</p>
        </motion.button>
      </div>
    </div>
  );
};

export default Intro;
