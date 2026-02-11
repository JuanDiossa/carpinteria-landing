/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./src/assets/hero-bg1.webp')",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#195de6",
        primaryBeige: "#F2BC8D",
        "background-light": "#f6f6f8",
        "background-dark": "#111621",
        charcoal: "#333333",
      },
    },
  },
  plugins: [],
};
