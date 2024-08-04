import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f1c40f',
        'secondary': '#77A8D5',
        
        'success': '#1abc9c',
        'info': '#3498db',
        'warning': '#F1C40F',
        'error': '#E74C3C',

        'dark': '#202124',
        'subdued': '#F5F5F5',
        'content': '#F9FAFB',

        'concrete': '#95a5a6',
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
