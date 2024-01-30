const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3397C6",
        secondary: "#112732",
        "primary-light": "#9CD4EE",
        "secondary-light": "#003953",
        "primary-opacity": "rgb(17, 39, 50, 0.5)",
        "light-blue": "#ACD9EC",
        "action-green": "#36A793",
        "action-blue": "#62CFE4",
        "primary-hover": "rgb(17, 39, 50, 0.7)",
        "action-hover": "rgb(54, 167, 147, 0.7)",
        "pale-blue": "#F2F8FA",
        "pale-blue-opacity": "rgb(242, 248, 250, 0.5)",
        white: "#FAFAFA",
        black: "#0D0D0D",
        
      },
      animation: {
        "reverse-spin": "reverse-spin 1s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            white: "#FAFAFA",
            black: "#0D0D0D",
            background: "#FAFAFA",
            foreground: "#0D0D0D",
            primary: {
              DEFAULT: "#3397C6",
              100: "#D6F9FC",
              200: "#AFF0F9",
              300: "#83D9ED",
              400: "#61BDDC",
              500: "#3397C6",
              600: "#2577AA",
              700: "#19598E",
              800: "#103F72",
              900: "#092D5F",
            },
            secondary: {
              DEFAULT: "#112732",
              100: "#D4F2F4",
              200: "#ACE1EA",
              300: "#74B1C1",
              400: "#427284",
              500: "#112732",
              600: "#0C1E2B",
              700: "#081724",
              800: "#05101D",
              900: "#030B18",
            },
          },
        },
      },
    }),
  ],
};
