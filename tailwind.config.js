const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3397c6",
          50: "#f3f8fc",
          100: "#e5f1f9",
          200: "#c5e2f2",
          300: "#92cae7",
          400: "#58b0d8",
          500: "#3397c6",
          600: "#2378a6",
          700: "#1d6087",
          800: "#1c5270",
          900: "#1c455e",
          950: "#132d3e",
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
        white: "#FAFAFA",
        black: "#0D0D0D",
        palette: {
          100: "#112732",
          200: "#225f7c",
          300: "#3397c6",
          400: "#30a9d9",
          500: "#62cfe4",
          600: "#cfe9f3",
          700: "#f2f8fa",
          800: "#36a793",
        },
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
            background: "#FAFAFA",
            foreground: "#0D0D0D",
          },
        },
      },
    }),
  ],
};
