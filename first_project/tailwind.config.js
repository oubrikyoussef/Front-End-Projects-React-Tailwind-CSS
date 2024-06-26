/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "450px" },
      },
      colors: {
        brand: {
          DEFAULT: "#00df9a", // Your brand color
          dark: "#02c486", // Darker variant, if needed
        },
      },
      keyframes: {
        "up-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-30px)" },
        },
      },
      animation: {
        "up-down": "up-down 1.3s linear infinite alternate",
      },
      boxShadow: {
        "custom-default": "0 2px 15px rgba(0, 0, 0, 0.1)",
        "custom-hover": "0 2px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
