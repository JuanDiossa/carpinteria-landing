/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-dev": "url('./src/assets/hero-bg1.webp')",
        "hero-bg": "url('/carpinteria-landing/hero-bg1.webp')",
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

// theme: {
//   extend: {
//     colors: {
//       primary: {
//         DEFAULT: "#9A6B4F",
//         light: "#C08457",
//       },
//       background: {
//         light: "#F6F6F8",
//         dark: "#111827",
//       },
//       text: {
//         dark: "#111827",
//         light: "#F9FAFB",
//         mutedLight: "#6B7280",
//         mutedDark: "#9CA3AF",
//       }
//     }
//   }
// }
