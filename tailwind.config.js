/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
      },
      colors: {
        'primary-color': '#000000',
        'secondary-color': '#616265',
        'third-color': '#D75100',
      },
    },
  },
  plugins: [],
}