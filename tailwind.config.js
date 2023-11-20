const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#112732",
      secondary: "#3397C6",
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
  },
};
export const darkMode = "class";
export const plugins = [nextui()];