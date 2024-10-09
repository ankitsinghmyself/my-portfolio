import React from "react";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 w-full text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          <MdEmail className="inline mr-2" />
          <a
            href="mailto:ankitsinghmyself@gmail.com"
            className="hover:text-gray-400"
          >
            ankitsinghmyself@gmail.com
          </a>
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Ankit Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
