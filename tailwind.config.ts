import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#1d2126",
        paper: "#ece7dc",
        smoke: "#9a968d",
        rule: "#353a41",
        lamp: "#e8b04b",
      },
      fontFamily: {
        display: ['"Newsreader Variable"', '"Noto Serif Georgian Variable"', "Georgia", "serif"],
        geo: ['"Noto Serif Georgian Variable"', "serif"],
        sans: ['"Public Sans Variable"', '"Noto Sans Georgian Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { page: "76rem" },
    },
  },
  plugins: [],
};
export default config;
