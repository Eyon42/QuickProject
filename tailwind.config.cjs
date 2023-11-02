// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-roboto)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#61DEF8",
        secondary: "#202533",
        dark: "#12192D",
        darker: "#070D1C",
        accent: "#61DEF8",
        "accent-foreground": "#070D1C",
      },
      fontSize: {
        "4xl": [
          "40px",
          {
            lineHeight: "40px",
          },
        ],
        "8xl": [
          "100px",
          {
            lineHeight: "100px",
          },
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
