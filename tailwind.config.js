/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#3D52A0',
        'medium-blue': '#7091E6',
        'blue-gray': '#8697C4',
        'light-blue-gray': '#ADBBDA',
        'very-light-lavender': '#EDE8F5',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, var(--dark-blue), var(--medium-blue))',
      },
    },
  },
  plugins: [],
};