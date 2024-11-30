import React, {useMemo} from "react";
import ThreeDImage from "./common/ThreeDImage";
import { motion } from "framer-motion";

// Animation Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const Intro: React.FC = React.memo(() => {
  return (
    <motion.div
      className="p-5 md:px-10 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-500 to-red-500 rounded-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Name Section */}
      <motion.div
        className="flex flex-col items-center md:items-start md:text-left order-2 md:order-1"
        variants={itemVariants}
      >
        <p className="text-sm text-white text-center md:text-left">
          <span className="text-2xl md:text-3xl font-bold text-white mb-2 block">
            Ankit Singh
          </span>
          Software Engineer
        </p>
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        className="flex flex-col items-center md:items-start md:text-left order-3 md:order-2"
        variants={itemVariants}
      >
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
     
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex flex-col items-center justify-center gap-4 mb-5 md:mb-0 md:flex-row order-1 md:order-3"
        variants={itemVariants}
      >
        <ThreeDImage
          src="/ankit.png"
          alt="Ankit Singh"
          width={200}
          height={180}
        />
      </motion.div>
    </motion.div>
  );
});

Intro.displayName = 'Intro';
export default Intro;
