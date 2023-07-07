/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: ["cupcake"],
    },
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        "3xl": "1140px",
      },
    },
  },
  plugins: [require("daisyui")],
};
