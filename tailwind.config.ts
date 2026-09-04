import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F1420",
          900: "#0B0F18",
          800: "#171E2E",
          700: "#212A3D",
          600: "#323D54",
        },
        paper: {
          DEFAULT: "#E8EAF0",
          muted: "#8891A6",
        },
        teal: {
          DEFAULT: "#4FA8A0",
          soft: "#3A7F79",
        },
        gold: {
          DEFAULT: "#D9A441",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex)", "sans-serif"],
      },
      maxWidth: {
        content: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
