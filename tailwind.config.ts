import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      kaushan: ['Kaushan Script'],
    },
    extend: {
      colors: {
        green:{
          DEFAULT: '#00f260',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
