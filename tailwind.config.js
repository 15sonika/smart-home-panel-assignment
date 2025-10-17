/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#121212',
        card: '#1a1a1a',
        subtle: '#1f1f1f',
        accent: {
          DEFAULT: '#10B981', // emerald-500
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
      },
      boxShadow: {
        glow: '0 0 1rem rgba(16,185,129,0.55)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
        ],
      },
    },
  },
  plugins: [],
};