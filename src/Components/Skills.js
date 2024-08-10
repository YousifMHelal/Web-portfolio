import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbSql, TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Fade } from "react-reveal";
const Skills = () => {
  return (
    <div className="container mx-auto max-w-[1172px] px-4 py-8" id="skills">
      {/* -----Heading----- */}
      <Fade top>
        <div>
          <h1 className="text-center bg-gradient-to-r from-start-red to-end-red bg-clip-text head">
            My skills
          </h1>
          <p className="text-center text-3xl capitalize text-light-h dark:text-dark-h">
            For those who know what they’re looking for..
          </p>
        </div>
      </Fade>
      {/* -----Skills section-----  */}
      <Fade bottom>
        <div
          className="py-8 mt-8 flex items-center gap-5 justify-center flex-wrap
          text-5xl text-light-h dark:text-dark-h max-xl:justify-center">
          <FaHtml5 className="m-4 cursor-pointer" title="HTML5" />
          <FaCss3Alt className="m-4 cursor-pointer" title="CSS3" />
          <IoLogoJavascript className="m-4 cursor-pointer" title="JavaScript" />
          <SiTypescript className="m-4 cursor-pointer" title="TypeScript" />
          <FaReact className="m-4 cursor-pointer" title="React" />
          <SiNextdotjs className="m-4 cursor-pointer" title="Next.js" />
          <SiRedux className="m-4 cursor-pointer" title="Redux" />
          <SiTailwindcss className="m-4 cursor-pointer" title="TailwindCSS" />
          <FaBootstrap className="m-4 cursor-pointer" title="Bootstrap" />
          <FaGitAlt className="m-4 cursor-pointer" title="Git" />
          <FaGithub className="m-4 cursor-pointer" title="GitHub" />
          <FaNode className="m-4 cursor-pointer" title="Node.js" />
          <SiMongodb className="m-4 cursor-pointer" title="MongoDB" />
          <TbSql className="m-4 cursor-pointer" title="SQL" />
          <FaWordpress className="m-4 cursor-pointer" title="WordPress" />
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
