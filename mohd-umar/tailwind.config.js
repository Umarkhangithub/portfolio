/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import  tailwindcssAnimate from "tailwindcss-animate"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ daisyui,
    tailwindcssAnimate,
  ],
}

