/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        accent: "#F3F6F9",
        border: "#E0E3E7",
      },
      textColor: {
        vivid: "#0A1929",
        dim: "#3E5060",
      },
    },
  },
  plugins: [],
};
