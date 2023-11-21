import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(var(--color-primary) / <alpha-value>)",
        "primary-opacity": "var(--color-primary-opacity)",
        "primary-hover": "var(--color-primary-hover)",
        "secondary": "rgb(var(--color-secondary) / <alpha-value>)",
        "light-blue": "rgb(var(--color-light-blue) / <alpha-value>)",
        "action-green": "rgb(var(--color-action-green) / <alpha-value>)",
        "action-blue": "rgb(var(--color-action-blue) / <alpha-value>)",
        "action-hover": "var(--color-action-hover)",
        "pale-blue": "rgb(var(--color-pale-blue) / <alpha-value>)",
        "pale-blue-opacity": "var(--color-pale-blue-opacity)",
        "white": "rgb(var(--color-white) / <alpha-value>)",
        "black": "rgb(var(--color-black) / <alpha-value>)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
export default config;
