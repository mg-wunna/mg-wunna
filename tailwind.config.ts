import { type Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    // Morflax type ladder. Inter for everything functional, display font for headline-display/lg.
    fontSize: {
      'label-sm': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.04em' }],
      caption: ['0.8125rem', { lineHeight: '1.25rem' }],
      'label-md': ['0.875rem', { lineHeight: '1.2' }],
      'body-sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'label-lg': ['1rem', { lineHeight: '1.2' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      'body-md': ['1rem', { lineHeight: '1.5rem' }],
      nav: ['1rem', { lineHeight: '1.5rem' }],
      'body-lg': [
        '1.125rem',
        { lineHeight: '1.75rem', letterSpacing: '-0.01em' },
      ],
      subheadline: ['1.8125rem', { lineHeight: '2.5rem' }],
      'headline-sm': [
        '2.375rem',
        { lineHeight: '3rem', letterSpacing: '-0.03em' },
      ],
      'headline-md': ['3rem', { lineHeight: '3.625rem' }],
      'headline-lg': ['4rem', { lineHeight: '1.05' }],
      'headline-display': ['6rem', { lineHeight: '1' }],
      'headline-hero': ['8rem', { lineHeight: '0.95' }],
    },
    extend: {
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        display: [
          'var(--font-display)',
          'Space Grotesk',
          'var(--font-sans)',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        // Morflax palette via CSS vars — tokens flip in dark mode via .dark class.
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        border: {
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
        },
        'muted-surface': 'rgb(var(--color-muted-surface) / <alpha-value>)',
        overlay: 'rgb(var(--color-overlay) / 0.1)',
        error: '#D92D20',
      },
      boxShadow: {
        none: 'none',
        // Soft, atmospheric only — Morflax avoids heavy elevation.
        soft: '0 1px 2px rgba(0, 0, 0, 0.04)',
        lift: '0 8px 24px -12px rgba(0, 0, 0, 0.08)',
        card: '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px -16px rgba(0, 0, 0, 0.08)',
        'card-hover':
          '0 1px 2px rgba(0, 0, 0, 0.05), 0 24px 48px -20px rgba(0, 0, 0, 0.18)',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      spacing: {
        // Morflax spacing tokens — 6/16/32/48/80 with 24px gutter, 32px margin.
        xs: '6px',
        sm: '16px',
        md: '32px',
        lg: '48px',
        xl: '80px',
        gutter: '24px',
        margin: '32px',
      },
      maxWidth: {
        '8xl': '88rem',
        prose: '720px',
        editorial: '980px',
      },
      aspectRatio: {
        case: '16 / 9',
        phone: '9 / 19.5',
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
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-secondary))',
            '--tw-prose-headings': 'rgb(var(--color-on-surface))',
            '--tw-prose-lead': 'rgb(var(--color-secondary))',
            '--tw-prose-links': 'rgb(var(--color-primary))',
            '--tw-prose-bold': 'rgb(var(--color-on-surface))',
            '--tw-prose-counters': 'rgb(var(--color-secondary))',
            '--tw-prose-bullets': 'rgb(var(--color-tertiary))',
            '--tw-prose-hr': 'rgb(var(--color-border))',
            '--tw-prose-quotes': 'rgb(var(--color-on-surface))',
            '--tw-prose-quote-borders': 'rgb(var(--color-primary))',
            '--tw-prose-captions': 'rgb(var(--color-secondary))',
            '--tw-prose-code': 'rgb(var(--color-on-surface))',
            '--tw-prose-pre-code': 'rgb(var(--color-on-surface))',
            '--tw-prose-pre-bg': 'rgb(var(--color-muted-surface))',
            '--tw-prose-th-borders': 'rgb(var(--color-border))',
            '--tw-prose-td-borders': 'rgb(var(--color-border))',
            '--tw-prose-invert-body': 'rgb(var(--color-secondary))',
            '--tw-prose-invert-headings': 'rgb(var(--color-on-surface))',
            '--tw-prose-invert-links': 'rgb(var(--color-primary))',
            '--tw-prose-invert-bold': 'rgb(var(--color-on-surface))',
            '--tw-prose-invert-hr': 'rgb(var(--color-border))',
            '--tw-prose-invert-quotes': 'rgb(var(--color-on-surface))',
            '--tw-prose-invert-quote-borders': 'rgb(var(--color-primary))',
            fontFamily: 'var(--font-sans), Inter, system-ui, sans-serif',
            a: { textDecoration: 'underline', textUnderlineOffset: '3px' },
            h2: {
              fontFamily: 'var(--font-display), var(--font-sans), sans-serif',
              fontWeight: '500',
              letterSpacing: '-0.02em',
            },
            h3: {
              fontFamily: 'var(--font-display), var(--font-sans), sans-serif',
              fontWeight: '500',
              letterSpacing: '-0.01em',
            },
            blockquote: { fontStyle: 'normal', fontWeight: '500' },
            '[lang="my"], [lang="my"] *': {
              fontFamily:
                'var(--font-myanmar), var(--font-sans), Inter, system-ui, sans-serif',
              lineHeight: '1.85',
            },
            '[lang="my"] h2, [lang="my"] h3': {
              fontFamily:
                'var(--font-myanmar), var(--font-display), var(--font-sans), sans-serif',
              letterSpacing: '0',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config
