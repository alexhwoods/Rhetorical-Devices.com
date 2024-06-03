import typography from "@tailwindcss/typography";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "hsl(var(--border-card))",
          input: "hsl(var(--border-input))",
          "input-hover": "hsl(var(--border-input-hover))",
        },
        background: {
          DEFAULT: "hsl(var(--background) / <alpha-value>)",
          alt: "hsl(var(--background-alt) / <alpha-value>)",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground) / <alpha-value>)",
          alt: "hsl(var(--foreground-alt) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark) / <alpha-value>)",
          4: "hsl(var(--dark-04))",
          10: "hsl(var(--dark-10))",
          40: "hsl(var(--dark-40))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
        },
        contrast: {
          DEFAULT: "hsl(var(--contrast) / <alpha-value>)",
        },
      },
      fontFamily: {
        serif: ["Libre Baskerville", ...fontFamily.serif],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              "&:focus": {
                outline: "none",
                boxShadow: `0 0 0 2px #7AA6C4`,
                borderRadius: theme("borderRadius.button"),
              },
              color: "#711F08",
            },
          },
        },
      }),
      fontSize: {
        xxs: "10px",
      },
      borderWidth: {
        6: "6px",
      },
      borderRadius: {
        card: "16px",
        "card-lg": "20px",
        "card-sm": "10px",
        input: "9px",
        button: "5px",
        "5px": "5px",
        "9px": "9px",
        "10px": "10px",
        "15px": "15px",
      },
      height: {
        input: "3rem",
        "input-sm": "2.5rem",
      },
      boxShadow: {
        mini: "var(--shadow-mini)",
        "mini-inset": "var(--shadow-mini-inset)",
        popover: "var(--shadow-popover)",
        kbd: "var(--shadow-kbd)",
        btn: "var(--shadow-btn)",
        card: "var(--shadow-card)",
        "date-field-focus": "var(--shadow-date-field-focus)",
      },
      opacity: {
        8: "0.08",
      },
      scale: {
        80: ".80",
        98: ".98",
        99: ".99",
      },
    },
  },
  plugins: [typography, require("tailwind-scrollbar")],
};
