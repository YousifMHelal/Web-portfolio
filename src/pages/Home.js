import React from "react";
import Landing from "../Components/Landing";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";

const Home = ({ theme }) => {
  return (
    <div>
      <Landing theme={theme} />
      <About theme={theme} />
      <Projects />
      <Skills />
      <Contact theme={theme} />
    </div>
  );
};

export default Home;
