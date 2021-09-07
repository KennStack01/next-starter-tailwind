const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        helloblue: {
          DEFAULT: "#0E8ABF",
          50: "#B9E6FA",
          100: "#A1DEF8",
          200: "#71CDF5",
          300: "#42BDF1",
          400: "#12ACEE",
          500: "#0E8ABF",
          600: "#0B688F",
          700: "#074560",
          800: "#042330",
          900: "#000101",
        },
        helloyellow: {
          DEFAULT: "#FFCD46",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFF6DF",
          300: "#FFE9AC",
          400: "#FFDB79",
          500: "#FFCD46",
          600: "#FFBF13",
          700: "#DFA300",
          800: "#AC7E00",
          900: "#795800",
        },
        hellodarkblue: {
          DEFAULT: "#266F98",
          50: "#B7D9ED",
          100: "#A2CFE8",
          200: "#79BADE",
          300: "#51A4D3",
          400: "#308DC1",
          500: "#266F98",
          600: "#1C516F",
          700: "#123346",
          800: "#07161E",
          900: "#000000",
        },
        hellosidebarblue: {
          DEFAULT: "#212936",
          50: "#8799B6",
          100: "#778BAC",
          200: "#5B7195",
          300: "#485975",
          400: "#344156",
          500: "#212936",
          600: "#0E1116",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/forms")],
};
