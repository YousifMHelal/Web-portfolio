import React, { useState } from "react";
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import DarkModeToggle from "./DarkModeToggle.JS";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
