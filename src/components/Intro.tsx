import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import CustomButton from "./common/CustomButton";
import ThreeDImage from "./common/ThreeDImage";

const Intro: React.FC = () => {
  return (
    <div className="p-5 md:px-10 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-500 to-red-500 rounded-md">
      <div className="flex flex-col items-center md:items-start">
        {/* <CustomButton
          label="Follow me on LinkedIn"
          icon={SiLinkedin}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ankitsinghmyself/",
              "_blank"
            )
          }
        /> */}
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mb-5 md:mb-0 md:flex-row">
        <p className="text-sm text-white text-center md:text-left order-2 md:order-1">
          <span className="text-2xl md:text-3xl font-bold text-white mb-2 block">
            Ankit Singh
          </span>
          Software Engineer
        </p>
        <div className="order-1 md:order-1">
          <ThreeDImage
            src="/ankit.png"
            alt="Ankit Singh"
            width={200}
            height={180}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
