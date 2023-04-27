/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000',
        'dark-h': '#e9e9e9',
        'dark-p': '#a0a0a0',
        'dark-p1': '#111',
        'dark-p2': '#888',
        'dark-p3': '#333',
        'start-color': '#007CF0',
        'start-color2': '#7928CA',
        'end-color': '#00DFD8',
        'end-color2': '#FF0080',


        
        html: '#e34c26',
        css: '#264de4',
        js: '#F0DB4F',
        react: '#61DBFB',
        redux: '#764abc',
        sass: '#CD6799',
        tailwind: '#38BDF8',
        bootstrap: '#563d7c',
        node: '#68A063',
        ex: '#303030',
        sql: '#F7AC00',
        word: '#21759b',
      },
    },
  },
  plugins: [],
}

