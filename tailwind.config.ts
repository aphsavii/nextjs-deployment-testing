import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        body: '#ebebeb00',
        lightBlack: '#333333',
        primary: '#0073b1',
        secondary: '#6b7280',
        alert: '#dc3545',
        success: '#198754',
        warn: '#ffc107',
      }
    },
  },
  plugins: [],
};
export default config;
