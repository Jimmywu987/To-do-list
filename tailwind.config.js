/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        light: {
          color: "#f8fdfe",
        },
        dark: {
          color: "#000000b3",
        },
      },
    },
  },

  plugins: [],
};
