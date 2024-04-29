import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "logo-blue": "#1A2E49",
        "logo-brown": "#B19768",
        "logo-cyan": "#B3DAF6",
      }
    },
  },
  plugins: [],
};
export default config;
