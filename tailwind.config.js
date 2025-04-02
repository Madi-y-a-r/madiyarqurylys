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
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
