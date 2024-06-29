import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        csBG: "#FFFFFF",
        csLGray: "#F3F3F3",
        csGray: "#BDBDBD",
        csGreen: "#B9FF66",
        csBlack: "#191A23",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
            paddingLeft: "100px",
            paddingRight: "100px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1400px",
          },
        },
      });
    }),
  ],
} satisfies Config;

export default config;
