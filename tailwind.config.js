/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "n-1": "#ffffff",
        "n-2": "#f0f4f8",
        "n-3": "#a8b8c8",
        "n-4": "#6b7d8f",
        "n-5": "#445262",
        "n-6": "#2c3845",
        "n-7": "#1c2530",
        "n-8": "#131a23",
        "n-9": "#0b0f16",
        "n-10": "#06090e",
        primary: "#06b6d4",
        "primary-light": "#67e8f9",
        coral: "#ff6b6b",
        sand: "#ffd166",
        leaf: "#06d6a0",
        accent: "#118ab2",
      },
      fontFamily: {
        sans: [
          "Sora",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        "5xl": ["3.5rem", { lineHeight: "1.1" }],
        "6xl": ["4.5rem", { lineHeight: "1.05" }],
        "7xl": ["5.5rem", { lineHeight: "1" }],
      },
      backgroundImage: {
        "ocean-glow":
          "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.3), transparent 60%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      boxShadow: {
        glow: "0 0 50px rgba(6,182,212,0.3)",
        "glow-sm": "0 0 25px rgba(6,182,212,0.25)",
        card: "0 20px 60px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
