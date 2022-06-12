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
    },
    colors: {
      maintext: "#1C1C33",
      maintextwhite: "#F6F6F8",
      mainbggreen: "#57D9A6",
      mainbgblack: "#23233B"
    }
  },
  plugins: [],
}