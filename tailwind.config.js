/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#94caff',
          400: '#6eb4ff',
          500: '#4897fb',
          600: '#3a78ea',
          700: '#3363cd',
          800: '#2c4fa3',
          900: '#274580',
          950: '#172a56',
        },
        // Keep beige as a secondary color option
        beige: {
          50: '#faf8f3',
          100: '#f5f0e8',
          200: '#ece1d2',
          300: '#e2d2bc',
          400: '#d9c3a6',
          500: '#cfb490',
          600: '#a69073',
          700: '#7c6c57',
          800: '#53483a',
          900: '#29241d',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};