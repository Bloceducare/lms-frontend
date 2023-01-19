/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./providers.tsx",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      "fira-sans": ["Fira Sans", "sans-serif"],
      abel: ["Abel", "sans-serif"],
    },
    extend: {
      colors: {
        "light-bg": "rgba(247, 245, 250, 0.96)",
        "brand-blue": "#0A033C",
        "brand-red-one": "#FF0000",
        "brand-red-two": "rgba(255, 0, 0, 0.4)",
        "brand-blue-two": "#959BA5",
        "brand-blue-three": "#050018",
        "brand-blue-four": "rgba(0, 210, 161, 0.46)",
        "brand-blue-five": "#00D2A1",
        "brand-blue-six": "#00D2A1",
        "brand-blue-seven": "#334D6E;",
        "brand-blue-eight": "#109CF1",
        "brand-pink": "#9C4DF4",
        "brand-pink-two": "rgba(255, 124, 215, 0.25)",
        "brand-pink-three": "#FF7CD7",
        "brand-green": "#00D2A1",
        "brand-green-two": "#2ED47A",
        "grey-2": " #4F4F4F",
        "grey-3": "#828282",
        "grey-4": "#707683",
        "grey-5": "#90A0B7",
        "brand-orange": "#FFB619",
        "brand-orange-two": "#FFB946",
        "brand-black": "#192A3E",
      },
    },
  },

  plugins: [],
};
