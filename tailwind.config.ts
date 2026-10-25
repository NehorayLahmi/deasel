import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfe3fe",
          300: "#93d1fd",
          400: "#60b7fa",
          500: "#3a9af5",
          600: "#2479e0",
          700: "#1d60b6",
          800: "#1d4f93",
          900: "#1d4476",
          950: "#152b4c",
        },
        accent: {
          DEFAULT: "#ff7a1a",
          light: "#ff9a4d",
          dark: "#d9600a",
        },
        success: "#16a34a",
        ink: "#0b1220",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      fontWeight: {
        headline: "800",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(16, 40, 80, 0.25)",
        glow: "0 0 0 4px rgba(58, 154, 245, 0.25)",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
