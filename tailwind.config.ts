// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002b4e',
        secondary: '#00203b',
        maingreen: '#6dfd83',
      },
      fontFamily: {
        main: ['Open Sans'],
      },
      // animation: {
      //   'gradient-xy': 'gradient-xy 12s ease infinite',
      // },
      // keyframes: {
      //   'gradient-xy': {
      //     '0%, 100%': {
      //       'background-position': '0% 50%',
      //     },
      //     '50%': {
      //       'background-position': '100% 50%',
      //     },
      //   },
      // },
    },
  },
  plugins: [],
};
export default config;
