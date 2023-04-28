import React, { useEffect, useState } from "react";
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  // -----Dark mode-----
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

  // -----Save mode in loacal storage-----
  const onWindows = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme)').matches)) {
      document.documentElement.classList.add('dark')
      document.body.style.background = '#fff'
    }
    else {
      document.documentElement.classList.remove('dark')
      document.body.style.background = '#000'
    }
  }

  onWindows();

  // -----Enable mode in button-----
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <div className="dark:bg-dark bg-light">
      <NavBar theme={theme} setTheme={setTheme} />
      <Home theme={theme} />
      <About theme={theme} />
      <Projects />
      <Skills />
      <Contact theme={theme} />
      <Footer />
    </div >
  );
}

export default App;
