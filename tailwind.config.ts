import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#5F656D',
      },
    },
  },
  plugins: [],
} satisfies Config;
