/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          100: "#47A5C5",
        },
        whatsappGreen: {
          100: "#49e670",
        },
        callGreen: {
          100: "#03e78b",
        },
        mailRed: {
          100: "#ff485f",
        },
        offWhite:{
          100: "#faf9f6"
        },
        blackTrans: {
          100: "rgba(128,128,128,0.5)",
        },
        beige: {
          100: "#ede8d0",
          400: "#c7b45b",
          800: "#7f4829"
        },
        teracotta:{
          100: "#E35336"
        },
        heading:{
          700: "#126312"

        },
        pink: {
          200: "#EF476F",
        },
        yellow: {
          50: "#FFD60A",
        },
      },
    },
  },
  plugins: [],
}