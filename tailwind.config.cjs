const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      rose: colors.rose,
      purple: colors.purple,
      teal: colors.teal,
      emerald: colors.emerald,
    },
    extend: {
      colors: {
        customGreenLight: "#66CBA4",
        customGreenDark: "#51B68F",
        customRed: "#FF604D",
        customBlueDark: "#292355",
        customBlueLight: "#A1D7E5",
      },
    },
  },
  // more options here
};
