/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { textShadow: "0 0 8px rgba(34, 197, 94, 1)" },
          "50%": { textShadow: "0 0 16px rgba(255, 255, 255, 0.5)" },
        },
      },
      animation: {
        glow: "glow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
