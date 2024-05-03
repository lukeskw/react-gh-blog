/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#112131',
          925: '#071422',
        },
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
