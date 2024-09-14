/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "*.jsx", "App.js"],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ["GeneralSans-Semibold"],
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-out": "fadeOut 0.5s ease-out 4.5s forwards",
      },
    },
    screens: {
      sl: "375px",
      ss: "415px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
        ".stack-list": {
          "font-family": "ClashDisplay-Bold",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
