/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3d": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      backgroundColor: {
        rblack: "#04080F",
        gloucous: "#507DBC",
        pblue: "#A1C6EA",
        cblue: "#BBD1EA",
        platinum: "#DAE3E5",
      },
    },
  },
  plugins: [],
}
