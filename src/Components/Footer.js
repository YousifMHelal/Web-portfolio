import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = ({ theme }) => {
  return (
    <div className="bg-light-p3 dark:bg-dark-p1 border-t-2 border-light-p dark:border-dark-p3 max-md:pb-[49px]">
      <div className="container mx-auto max-w-[1172px] px-4 py-8 flex justify-between items-center max-md:flex-col max-md:items-center">
        <div>
          <p className="text-light-p text-2xl dark:text-dark-p2 pb-2">
            Emily Turner
          </p>
        </div>
        <div>
          <div className="flex">
            <a href="/">
              <FaFacebook
                className="text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125"
              />
            </a>
            <a href="/">
              <FaGithub
                className="text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125"
              />
            </a>
            <a href="/">
              <FaLinkedinIn
                className="text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125"
              />
            </a>
            <a href="/">
              <FaEnvelope
                className="text-2xl mx-4 mt-2 text-light-h dark:text-dark-h cursor-pointer 
                        transition-[1.5s] hover:text-start-blue dark:hover:text-start-blue hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center pb-4 text-light-p2 dark:text-dark-p2 capitalize">
        Copyright © 2024 Yousif M.Helal. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
