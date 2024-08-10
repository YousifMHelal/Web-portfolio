import React from "react";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";
import { Data } from "../utilities/Data";

const ProjectInfo = ({ theme }) => {
  const id = useParams();

  const project = Data.filter((ele, i) => {
    return Data[i].id === id.id ? ele : null;
  });
  const Techs = project[0].techs;

  return (
    <div className="container overflow-hidden mx-auto max-w-[1172px] px-4">
      <div
        className="min-h-[100vh] flex items-center gap-16
            max-md:flex-col max-md:justify-normal max-md:mt-20">
        {/* -----The left side----- */}
        {/* -----The project info----- */}
        <Fade top>
          <div
            className="overflow-hidden max-w-[600px] max-h-[420px] bg-white rounded-md border-2 
                        red-border border-solid border-transparent shadow-[0px_10px_63px_7px_rgba(0,0,0,0.4)]
                        min-w-[350px] min-h-[260px]">
            <img src={project[0].img} alt="project" />
          </div>
        </Fade>
        {/* -----The right side----- */}
        {/* -----The project info----- */}
        <Fade top>
          <div className="max-md:text-center">
            <h3 className="text-center text-3xl text-light-h dark:text-dark-h py-4">
              {project[0].name}
            </h3>
            <p className="text-light-p dark:text-dark-p2 text-xl max-w-[600px]">
              {project[0].info}
            </p>

            {project[0].note ? (
              <p className="text-light-p dark:text-dark-p2 text-xl pt-4">
                <span className="text-red-600">Note:</span> {project[0].note}
              </p>
            ) : null}
            <ol className="flex gap-3 mt-8 flex-wrap max-md:justify-center">
              {Techs.map((item, i) => {
                return (
                  <li
                    key={i}
                    className={`px-4 text-[14px] rounded-full uppercase dark:text-light-h text-dark-h ${project[0].color[i]}`}>
                    {item}
                  </li>
                );
              })}
            </ol>
            <div className="flex gap-10">
              {theme === "dark" ? (
                <a href={project[0].demo} target="blank">
                  <button className="btn dark-red-btn">live demo</button>
                </a>
              ) : (
                <a href={project[0].demo} target="blank">
                  <button className="btn red-btn">live demo</button>
                </a>
              )}
              {theme === "dark" ? (
                <a href={project[0].github} target="blank">
                  <button className="btn dark-blue-btn">Github repo</button>
                </a>
              ) : (
                <a href={project[0].github} target="blank">
                  <button className="btn blue-btn">Github repo</button>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProjectInfo;
