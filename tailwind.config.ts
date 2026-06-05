import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Single accent — lime green
        lime: {
          50: "#f7ffe0",
          100: "#ecffb3",
          200: "#e2ff85",
          300: "#dcff57",
          400: "#d7ff2f", // brand accent
          500: "#bdec00",
          600: "#9bc400",
          700: "#769400",
          800: "#586f00",
          900: "#3f4f00",
        },
        // Near-black backgrounds (slight warm-green tint)
        ink: {
          950: "#070807",
          900: "#0b0d0b",
          850: "#101210",
          800: "#161916",
          700: "#1f231f",
          600: "#2c312c",
          500: "#3a403a",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "Arial Black", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        lime: "0 12px 40px -10px rgba(215, 255, 47, 0.4)",
        "lime-lg": "0 18px 60px -12px rgba(215, 255, 47, 0.55)",
        card: "0 20px 60px -24px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "lime-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(215,255,47,0.18) 0%, transparent 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-ring": "pulse-ring 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
