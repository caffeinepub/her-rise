/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        cream: {
          bg: "oklch(var(--cream-bg) / <alpha-value>)",
          deep: "oklch(var(--cream-deep) / <alpha-value>)",
        },
        rose: {
          soft: "oklch(var(--rose-soft) / <alpha-value>)",
          light: "oklch(var(--rose-light) / <alpha-value>)",
        },
        charcoal: {
          deep: "oklch(var(--charcoal-deep) / <alpha-value>)",
          mid: "oklch(var(--charcoal-mid) / <alpha-value>)",
          light: "oklch(var(--charcoal-light) / <alpha-value>)",
        },
        emergency: {
          DEFAULT: "oklch(var(--emergency) / <alpha-value>)",
          bg: "oklch(var(--emergency-bg) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        full: "9999px",
      },
      boxShadow: {
        card: "0 4px 24px -4px oklch(0.58 0.12 15 / 0.10), 0 1px 4px oklch(0.58 0.12 15 / 0.05)",
        "card-hover": "0 8px 32px -4px oklch(0.58 0.12 15 / 0.18), 0 2px 8px oklch(0.58 0.12 15 / 0.08)",
        rose: "0 4px 20px -2px oklch(0.58 0.12 15 / 0.30)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
