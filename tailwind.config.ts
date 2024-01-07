import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        accent: "var(--color-secondary)",
        alpha: "var(--background-alpha)",
        primary: "var(--background-primary)",
        secondary: "var(--background-secondary)",
        tertiary: "var(--background-tertiary)",
      },
      borderColor: {
        "b-primary": "var(--border-primary)",
        "b-secondary": "var(--color-secondary)",
      },
      colors: {
        tertiary: "var(--color-tertiary)",
      },
    },
  },
  plugins: [],
};
export default config;
