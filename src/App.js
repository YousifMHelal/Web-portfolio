import React, { useEffect, useLayoutEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Loader from "./utilities/Loader";
import Home from "./pages/Home";
import ProjectInfo from "./pages/ProjectInfo";
import { Route, Routes, useLocation } from "react-router-dom";
import Error from "./pages/Error";

function App() {
  // -----Dark mode-----
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  // -----Save mode in local storage-----
  const onWindows = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#fff";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#000";
    }
  };

  onWindows();

  // -----Enable mode in button-----
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // -----Loading page-----
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // -----Smooth scroll to top-----
  const pathname = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="dark:bg-dark bg-light ">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="project/:id" element={<ProjectInfo theme={theme} />} />
            <Route path="*" element={<Error theme={theme} />} />
          </Routes>
          <Footer theme={theme} />
        </div>
      )}
    </div>
  );
}

export default App;
