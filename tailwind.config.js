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
      w1280: { max: "1280px" },
      w1160: { max: "1160px" },
      w1100: { max: "1100px" },
      w1050: { max: "1050px" },
      w930: { max: "930px" },
      w880: { max: "880px" },
      w850: { max: "850px" },
      w770: { max: "750px" },
      w640: { max: "640px" },
      w520: { max: "520px" },
      w425: { max: "425px" },
      w375: { max: "375px" },
    },
    colors: {
      maintext: "#1C1C33",
      maintextwhite: "#F6F6F8",
      mainbggreen: "#57D9A6",
      mainbgblack: "#23233B",
      maingtextgray: "#B2B2BF",
      white: "#FFFFFF",
      cardtexta:"#4E4E65",
      mainbgworkshop: "#F5F5F5"
    }
  },
  plugins: [],
}