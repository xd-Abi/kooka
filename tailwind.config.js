/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#F3F6F9",
      },
      borderColor: {
        vivid: "#E0E3E7",
      },
      textColor: {
        vivid: "#0A1929",
        dim: "#3E5060",
      },
      stroke: {
        vivid: "#0A1929",
        dim: "#3E5060",
      },
    },
  },
  plugins: [],
};
