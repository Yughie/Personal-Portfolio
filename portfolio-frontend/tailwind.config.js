/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        brandblue: "#003766",
        hoverblue: "#0084F6",
        brandwhite: "#FFFFFF",
        brandyellow: "#FFC303",
        hoveryellow: "#DBAB11",
        brandblack: "#000000",
        brandgrey: "#585858",
      },
      fontFamily: {
        brand: ["Montserrat", "sans-serif"], // custom font
      },
      fontSize: {
        titileSize: "24",
      },
    },
      
  },
  plugins: [],
}

