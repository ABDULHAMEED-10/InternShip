/** @type {import('tailwindcss').Config} */
export default {
  content : [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'HeadGray': '#333333',
        'ListRed': '#A90D0D',
        'LogoRed': '#D00E16',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

