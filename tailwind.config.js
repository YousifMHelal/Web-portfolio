/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000',
        'dark-bg2': '#111',
        'dark-h': '#e9e9e9',
        'dark-p': '#a0a0a0',
        'dark-p1': '#111',
        'dark-p2': '#888',
        'start-color': '#007CF0',
        'start-color2': '#7928CA',
        'end-color': '#00DFD8',
        'end-color2': '#FF0080'
      },
    },
  },
  plugins: [],
}

