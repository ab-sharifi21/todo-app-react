/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'box-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
      },
      colors: {
        red1: '#f14444',
        yellow1: '#eaee34',
        green1: '#32f569',
      },
    },
  },
  plugins: [],
};
