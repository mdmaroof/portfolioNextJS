import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
        mono: ["DM Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#201f32",
        "ink-heading": "#1f1f32",
        "card-gray": "#e4e4f0",
        surface: "#f3f3f9",
        "surface-card": "#ffffff",
        blueAccent: "#262ef2",
        blueSoft: "#6e73fa",
        lineMuted: "#e3e2e5",
        textMuted: "#4d5564",
      },
      boxShadow: {
        deslopify: "0 18px 40px -20px rgba(32, 31, 50, 0.12)",
        card: "0 10px 30px -10px rgba(32, 31, 50, 0.08)",
        floating: "0 25px 60px -15px rgba(32, 31, 50, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
