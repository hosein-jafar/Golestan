/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "340px",

      desktop: "1000px",
    },
    extend: {
      backgroundImage: {
        header:
          "url('https://www.golestan.com/wp-content/uploads/2023/01/header-back-1.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
};
