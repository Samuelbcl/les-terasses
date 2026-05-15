import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charbon: {
          DEFAULT: "#0F0F0E",
          90: "#1F1F1D",
        },
        craie: "#F4EFE6",
        lin: "#E8DFC9",
        encre: "#1A1815",
        "blanc-craie": "#FBF7F1",
        bordeaux: {
          DEFAULT: "#5C1A1B",
          hover: "#7A2426",
          active: "#4A1416",
        },
        ocre: {
          DEFAULT: "#B5733A",
          soft: "#C99366",
        },
        ardoise: "#3A3835",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
