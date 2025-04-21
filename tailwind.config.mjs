/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#d9e2f5',
          200: '#b8c9eb',
          300: '#8ca3dd',
          400: '#6076cc',
          500: '#4353b9',
          600: '#3a419e',
          700: '#333681',
          800: '#2e2f6a',
          900: '#0F172A',
        },
        accent: {
          50: '#f6f3ff',
          100: '#ece8ff',
          200: '#dcd5ff',
          300: '#c3b5ff',
          400: '#a98bff',
          500: '#9061fc',
          600: '#7C3AED',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.100'),
              overflow: 'auto',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontWeight: '400',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [],
};