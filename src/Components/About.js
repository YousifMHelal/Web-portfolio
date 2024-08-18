import React from "react";
import img from "../assets/about.png";

const About = ({ theme }) => {
  return (
    <div className="container mx-auto max-w-[1172px] px-4 py-8" id="about">
      {/* -----Page header----- */}
      <div>
        <h1 className="text-center bg-gradient-to-r from-start-red to-end-red bg-clip-text head">
          About me
        </h1>
        <p className="text-center text-3xl text-light-h dark:text-dark-h">
          Who am i
        </p>
      </div>
      {/* -----Page content----- */}
      <div className="flex max-md:flex-col items-center justify-between py-12">
        {/* -----Photo----- */}
        <div>
          {theme === "dark" ? (
            <img
              src={img}
              alt="Avatar"
              className="p-3 w-[320px] border-4 border-solid border-transparent dark-red-border max-md:mb-8"
            />
          ) : (
            <img
              src={img}
              alt="Avatar"
              className="p-3 w-[320px] border-4 border-solid border-transparent red-border max-md:mb-8 shadow-[0px_10px_63px_7px_rgba(0,0,0,0.3)]"
            />
          )}
        </div>
        {/* -----About me paragraph----- */}
        <div className="w-[732px] max-md:w-[100%] ml-16 max-md:ml-0">
          <p className="text-light-p dark:text-dark-p2 text-xl text-justify">
            I am a dedicated and detail-oriented Full-Stack Developer with over
            five years of experience in the tech industry. My journey started
            with a fascination for coding, leading me to develop a strong
            foundation in web development. Over the years, I’ve honed my skills
            in various programming languages and frameworks, always staying
            updated with the latest trends and technologies. I enjoy solving
            complex problems and am always eager to learn new things. When I’m
            not coding, you’ll find me hiking, reading tech blogs, or
            experimenting with new recipes.
          </p>
          {theme === "dark" ? (
            <a href="/">
              <button className="btn dark-red-btn">My cv</button>
            </a>
          ) : (
            <a href="/">
              <button className="btn red-btn">My cv</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
