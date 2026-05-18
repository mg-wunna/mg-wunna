import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '4rem' }],
      '7xl': ['4.5rem', { lineHeight: '4.75rem' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          DEFAULT: colors.red[600],
          hover: colors.red[700],
          fg: colors.white,
          subtle: colors.red[50],
        },
        surface: {
          DEFAULT: colors.white,
          muted: colors.zinc[50],
          border: colors.zinc[200],
        },
        'surface-dark': {
          DEFAULT: colors.zinc[950],
          muted: colors.zinc[900],
          border: colors.zinc[800],
        },
      },
      boxShadow: {
        card: '0 1px 2px rgb(0 0 0 / 0.04), 0 1px 3px rgb(0 0 0 / 0.05)',
        'card-hover':
          '0 4px 6px rgb(0 0 0 / 0.05), 0 10px 15px rgb(0 0 0 / 0.08)',
      },
      transitionTimingFunction: {
        enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '220': '220ms',
        '320': '320ms',
      },
    },
  },
} satisfies Config
