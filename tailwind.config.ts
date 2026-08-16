import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Project card gradients (dynamically composed from data.js)
    "from-violet-600",
    "to-indigo-600",
    "from-violet-500/50",
    "to-indigo-500/50",
    "from-emerald-600",
    "to-cyan-600",
    "from-emerald-500/50",
    "to-cyan-500/50",
    "from-amber-500",
    "to-orange-600",
    "from-amber-500/50",
    "to-orange-500/50",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        modalBackground: "rgba(0, 0, 0, 0.85)",
      },
    },
  },
  plugins: [],
};
export default config;
