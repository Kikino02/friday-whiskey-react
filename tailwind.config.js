/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['"Oswald"', "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
        anton: ['"Anton"', "sans-serif"],
        right: ['"Righteous"', "sans-serif"],
        julee: ['"Julee"', "sans-serif"],
        sigmar: ['"Sigmar One"', "sans-serif"],
      },
      colors: {
        white: "#fff",
        myBlack: "#0A0C10",
        primaryRed: "#CD2222",
        tertiaryBlue: "#18457C",
        primaryDark: "#575757",
        lightDark: "#424345",
        darkGrey: "#7D7E80",
        darkGreyButton: "#121417",
        lightGrey: "#D8D8D8",
        grey: "#B9B9B9",
        form: "#222427",
      },
    },
  },
  plugins: [],
};
