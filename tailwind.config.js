// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit", // Just in time compiler
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        custom: {
          50: "#082247c4",
          100: "#10448e",
          200: "#0e3b7c",
          300: "#0c336a",
          400: "#0a2a59",
          500: "#082247",
          600: "#082247",
          700: "#082247",
          800: "#082247",
          900: "#082247",
        },
      },
      screens: {
        cb: "1050px",
      },
      strokeWidth: {
        1: "0.35px",
        2: "0.45px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-accent-color")()],
};
