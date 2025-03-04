/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(30px) scale(5)" },
          "100%": { opacity: "1", transform: "translateY(0px) scale(1)" },
        },
      },
      animation: {
        fadeSlideUp: "fadeSlideUp 1s ease-out forwards",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
