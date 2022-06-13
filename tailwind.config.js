module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
			xl: { max: "1280px" },
			lg: { max: "1024px" },
			md: { max: "768px" },
			sm: { max: "640px" },
      w1320: { max: "1320px" },
      w1160: { max: "1160px" },
      w1100: { max: "1100px" },
      w930: { max: "930px" },
      w520: { max: "520px" },
      w425: { max: "425px" },
    },
    colors: {
      maintext: "#1C1C33",
      maintextwhite: "#F6F6F8",
      mainbggreen: "#57D9A6",
      mainbgblack: "#23233B",
      maingtextgray: "#B2B2BF",
    }
  },
  plugins: [],
}