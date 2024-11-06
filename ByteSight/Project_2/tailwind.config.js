/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],

      },
      colors: {
        'cutom-blue': "#0057FC",
        'custom-red': "#FF1F25",
        'custom-green': "#56BA28",
      },

    },
  },
  plugins: [],
}

