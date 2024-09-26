import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface CustomButtonProps {
  label: string;
  icon: IconType;
  onClick: () => void;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  className = ""
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`rounded-lg border-white border-2 bg-black text-gray-300 py-2 px-4 flex items-center ${className}`}
    >
      <Icon className="w-5 h-5 mr-2" />
      <p className="text-sm">{label}</p>
    </motion.button>
  );
};

export default CustomButton;
