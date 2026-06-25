/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "n-1": "#ffffff",
        "n-2": "#e4e4e7",
        "n-3": "#a1a1aa",
        "n-4": "#71717a",
        "n-5": "#52525b",
        "n-6": "#27272a",
        "n-7": "#1c1c1f",
        "n-8": "#141416",
        "n-9": "#0a0a0b",
        "n-10": "#050506",
        primary: "#00f0ff",
        "primary-dim": "#0891a8",
        accent: "#7c3aed",
        success: "#39ff8a",
        warn: "#ffb800",
      },
      fontFamily: {
        sans: [
          "Sora",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Roboto Mono", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(0,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(circle at 50% 30%, rgba(0,240,255,0.12), transparent 60%)",
      },
      backgroundSize: {
        "grid-sm": "32px 32px",
      },
      animation: {
        scan: "scan 4s linear infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        flicker: "flicker 3s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.5",
            boxShadow: "0 0 10px rgba(0,240,255,0.3)",
          },
          "50%": { opacity: "1", boxShadow: "0 0 25px rgba(0,240,255,0.6)" },
        },
        flicker: {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.4" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,240,255,0.25)",
        "glow-sm": "0 0 15px rgba(0,240,255,0.2)",
        "glow-accent": "0 0 30px rgba(124,58,237,0.25)",
      },
    },
  },
  plugins: [],
};
