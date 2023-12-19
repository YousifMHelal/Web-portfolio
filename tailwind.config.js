/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //-----Dark mode colors-----
        dark: "#000",
        "dark-h": "#e9e9e9",
        "dark-p": "#a0a0a0",
        "dark-p1": "#111",
        "dark-p3": "#333",
        "dark-p2": "#888",

        //-----Main colors-----
        "start-blue": "#007CF0",
        "start-red": "#7928CA",
        "end-blue": "#00DFD8",
        "end-red": "#FF0080",

        //-----Light mode colors-----
        light: "#fff",
        "light-h": "#000",
        "light-p": "#666",
        "light-p2": "#999",
        "light-p3": "#fafafa",

        //-----Tech colors-----
        html: "#e34c26",
        css: "#264de4",
        javascript: "#F0DB4F",
        react: "#61DBFB",
        redux: "#764abc",
        sass: "#CD6799",
        tailwind: "#38BDF8",
        bootstrap: "#563d7c",
        node: "#68A063",
        ex: "#303030",
        sql: "#F7AC00",
        word: "#21759b",
        next: "#cccccc",
        mongo: "#00ed64",
        prisma: "#4c51bf",
        fire: "#fcbd02",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

