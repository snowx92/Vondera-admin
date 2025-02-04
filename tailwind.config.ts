import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Include all files in the pages directory (if applicable)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
