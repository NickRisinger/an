/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ared: "#E2061A",
        ablack: "#2F2F2F",
        agray: "#DDDDDD",
        argray: "#F4F4F4",
        arbgray: "#989898",
        arbagray: "#7D7D7D",
        arbatgray: "#F9F9F9",
        bggray: "#e1e1e1",
        bgfilter: "rgba(47, 47, 47, .3)",
        arblack: "#454545",
        filterselected: "#FFEEF3",
        border2: "#C5C5C5",
        bgblock: "#F2FAFF",
        bgpink: "#FFEEF3",
        apink: "#FFE9EF",
        ablue: "#EEFAFF",
        afrgray: "#F8F9F9",
        borderarrow: "#DBDBDB",
        arrowgray: "#7B7E87",
        ayellow: "#FFCF25",
      },
      screens: {
        afterxl: { min: "1376px" },
        s: { min: "375px" },
        sx: { min: "530px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: "Open Sans",
    },
  },
  plugins: [],
};
