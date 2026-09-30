import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        survey: {
          background: "#F7F8FA",
          border: "#E5E7EB",
          text: "#111827",
          muted: "#6B7280",
          orange: "#EA580C",
          orangeSoft: "#FFF7ED",
          warning: "#FFFBEF",
          green: "#15803D",
          red: "#DC2626",
          step: "#E5EDF7",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.03)",
      },
    },
  },
  plugins: [],
};

export default config;
