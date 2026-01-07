import scrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    screens:{
            phone:"320px"
    },
    extend: {
      colors: {
        // you can define custom colors here if needed
       
      }, 
      fontFamily: {
        // optional: custom fonts
        sans: ["Inter", "sans-serif"],
        notch:["Stack Sans Notch", "sans-serif"]
      },
    },
  },
  plugins: [scrollbarHide] // ✅ hides scrollbar in slide,
};

