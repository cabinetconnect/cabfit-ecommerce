import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#1F2326",
          gold: "#D4A72C",
          neutral: "#F2F2F0",
          dark: "#141719",
          border: "#D9D4C8",
          muted: "#6B6E70"
        }
      },
      boxShadow: {
        soft: "0 16px 50px rgba(31, 35, 38, 0.08)"
      },
      fontFamily: {
        sans: [
          "var(--font-roboto)",
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        display: [
          "var(--font-roboto-condensed)",
          "Roboto Condensed",
          "var(--font-roboto)",
          "Roboto",
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
