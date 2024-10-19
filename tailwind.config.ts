import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'tt-norms': ['TT Norms', 'sans-serif'],
    },
    colors: {
      'dark-green': '#0B3B3C',
      'light-green': '#6D8A83',
      'footer-green': '#E8EFE9',
      'red': '#7E0707',
    },
    fontSize: {
      'body-4': ['16px', { lineHeight: '30px', fontWeight: '400' }],
      'body-3': ['18px', { lineHeight: '30px', fontWeight: '400' }],
      'heading-3': ['40px', { lineHeight: '60px', fontWeight: '400', letterSpacing: '-0.03em' }],
      'heading-4': ['28px', { lineHeight: '40px', fontWeight: '400', letterSpacing: '-0.03em' }],
      'heading-7': ['10px', { lineHeight: '15px', fontWeight: '700', letterSpacing: '0.15em' }],
      'heading-1': ['90px', { lineHeight: '90px', fontWeight: '400', letterSpacing: '-0.03em' }],
    },
  },
  fontFamily: {
    sans: ['TT Norms', 'sans-serif'],
  },
  plugins: [],
};
export default config;
