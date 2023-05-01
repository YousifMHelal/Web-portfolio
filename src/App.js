import React, { useEffect, useState } from "react";
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Loader from "./utilities/Loader";
import ProjectInfo from "./pages/ProjectInfo";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // -----Dark mode-----
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

  // -----Save mode in local storage-----
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

  // -----Loading page-----
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="dark:bg-dark bg-light ">
      {
        loading
          ? <Loader />
          : <div>
            <NavBar theme={theme} setTheme={setTheme} />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home theme={theme} />}>
                  <Route path="project" element={<ProjectInfo />} />
                </Route>
              </Routes>
            </BrowserRouter>
            <Footer />
          </div>
      }


    </div >
  );
}

export default App;
