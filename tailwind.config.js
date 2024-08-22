/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ['"GeneralSans-Semibold"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".transform-style-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".transform-style-flat": {
          "transform-style": "flat",
        },
        ".translate-z": {
          transform: "translateZ(-50px) scale(1.5)",
        },
        ".translate-z-2": {
          transform: "translateZ(-100px) scale(2)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
