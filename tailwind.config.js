/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // darkMode: ["class"],
//   content: [
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: '',
//   screens: {
//     sm: '640px',
//     md: '768px',
//     lg: '1024px',
//     xl: '1280px',
//     '2xl': '1400px',
//   },
//   colors: {
//     'primary-color': '#000000',
//     'secondary-color': '#616265',
//     'third-color': '#D75100',
//   },
//   plugins: [require('tailwindcss-animate')],
// }
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
        'third-color': '#60BE90',
      },
    },
  },
  plugins: [],
}