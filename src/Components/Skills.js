import React from "react";
import {
  FaAngular,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import {
  SiDjango,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
const Skills = () => {
  return (
    <div className="container mx-auto max-w-[1172px] px-4 py-8" id="skills">
      {/* -----Heading----- */}
      <div>
        <h1 className="text-center bg-gradient-to-r from-start-red to-end-red bg-clip-text head">
          My skills
        </h1>
        <p className="text-center text-3xl capitalize text-light-h dark:text-dark-h">
          For those who know what they’re looking for..
        </p>
      </div>
      {/* -----Skills section-----  */}
      <div
        className="py-8 mt-8 flex items-center gap-5 justify-center flex-wrap
          text-5xl text-light-h dark:text-dark-h max-xl:justify-center">
        <FaHtml5 className="m-4 cursor-pointer" title="HTML5" />
        <FaCss3Alt className="m-4 cursor-pointer" title="CSS3" />
        <IoLogoJavascript className="m-4 cursor-pointer" title="JavaScript" />
        <FaReact className="m-4 cursor-pointer" title="React" />
        <FaVuejs className="m-4 cursor-pointer" title="Vue" />
        <FaAngular className="m-4 cursor-pointer" title="Angular" />
        <FaNodeJs className="m-4 cursor-pointer" title="Node" />
        <SiExpress className="m-4 cursor-pointer" title="Express" />
        <SiDjango className="m-4 cursor-pointer" title="Django" />
        <SiGraphql className="m-4 cursor-pointer" title="Graphql" />
        <TbSql className="m-4 cursor-pointer" title="SQL" />
        <SiMongodb className="m-4 cursor-pointer" title="MongoDB" />
        <SiPostgresql className="m-4 cursor-pointer" title="Postgres" />
        <FaGitAlt className="m-4 cursor-pointer" title="Git" />
        <FaGithub className="m-4 cursor-pointer" title="GitHub" />
        <IoLogoFirebase className="m-4 cursor-pointer" title="Firebase" />
        <FaWordpress className="m-4 cursor-pointer" title="WordPress" />
      </div>
    </div>
  );
};

export default Skills;
