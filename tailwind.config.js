module.exports = {
  darkMode: 'class',
  mode: "jit",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "900px": "900px",
      },
      backgroundColor: {
        vulcan: {
          50: "#868fac",
          100: "#848ca9",
          200: "#7a829f",
          300: "#6a7390",
          400: "#5d6479",
          500: "#4a4f5e",
          600: "#3b3f4f",
          700: "#2c313f",
          800: "#232734",
          900: "#1a1d27",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
