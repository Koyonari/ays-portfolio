/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ["GeneralSans-Semibold"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".perspective-100": {
          perspective: "100px",
        },
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
        ".text-outline-only": {
          "-webkit-text-fill-color": "transparent",
          "-webkit-text-stroke": "5px",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
