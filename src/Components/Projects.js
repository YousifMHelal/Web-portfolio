import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { Data } from "../utilities/Data";

const Projects = () => {
  return (
    // -----Projects page-----
    <div className="container mx-auto max-w-[1172px] px-4 py-8" id="project">
      {/* -----Heading----- */}
      <Fade top>
        <div>
          <h1 className="text-center bg-gradient-to-r from-start-blue to-end-blue bg-clip-text head">
            My Projects
          </h1>
          <p className="text-center text-3xl capitalize text-light-h dark:text-dark-h">
            My works experience
          </p>
        </div>
      </Fade>
      {/* -----Projects card----- */}
      <div className="flex-col w-full h-full px-4 relative mt-20">
        {/* Vertical Line */}
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px line-border h-full hidden lg:block"></div>

        {Data.map((item, index) => (
          <div
            key={item.id}
            className={`grid lg:grid-cols-2 gap-4 my-20 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } relative`}>
            {/* Marker Point on the Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-2 w-2 bg-end-blue rounded-full top-1/2 -translate-y-1/2 z-10 hidden lg:block"></div>

            <div
              className={`lg:flex items-center justify-center hidden ${
                index % 2 === 0 ? "order-1" : "order-2"
              }`}>
              <p className="text-light-p dark:text-dark-p2 text-xl w-[420px] text-justify">
                {item.info}
                <Link
                  className="text-black dark:text-white px-4"
                  to={`/project/${item.id}`}>
                  More details
                </Link>
              </p>
            </div>
            <Link
              to={`/project/${item.id}`}
              className={`flex-shrink-0 flex items-center justify-center ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}>
              <div className="overflow-hidden md:w-[420px] md:h-[310px] blue-border border-solid relative border-transparent rounded-xl border-2 shadow-[0px_10px_63px_7px_rgba(0,0,0,0.4)] cursor-pointer">
                <img src={`${item.img}`} alt={`Project ${item.id}`} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
