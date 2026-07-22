import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#06111f", 900: "#091a2f", 800: "#102a47", 700: "#123b66" },
        electric: { 400: "#38bdf8", 500: "#0ea5e9" },
      },
      boxShadow: { glow: "0 0 60px rgba(14, 165, 233, 0.18)" },
      fontFamily: { sans: ["var(--font-inter)", "Inter", "sans-serif"] },
      animation: { float: "float 7s ease-in-out infinite" },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-16px)" } } },
    },
  },
  plugins: [],
};
export default config;
