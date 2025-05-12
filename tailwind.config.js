/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        Mobile: "480px",
        Tablet: "768px",
        Laptop: "1280px",
        Desktop: "1920px",
      },
      colors: {
        primary: "#b7e2b9",
        "primary-content": "#2c6e2f",
        "primary-dark": "#93d396",
        "primary-light": "#dbf1dc",

        secondary: "#b7cae2",
        "secondary-content": "#2c496e",
        "secondary-dark": "#93afd3",
        "secondary-light": "#dbe5f1",

        background: "#eff1ef",
        foreground: "#fbfbfb",
        border: "#dde2dd",

        copy: "#232924",
        "copy-light": "#5e6e5f",
        "copy-lighter": "#849584",

        success: "#b7e2b7",
        warning: "#e2e2b7",
        error: "#e2b7b7",

        "success-content": "#2c6e2c",
        "warning-content": "#6e6e2c",
        "error-content": "#6e2c2c",
      },
    },
  },
  plugins: [animations],
};
