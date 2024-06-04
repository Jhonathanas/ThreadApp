/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      position: {
        sticky: 'sticky',
      },
      zIndex: {
        1600: '1600',
      },
    },
  },
  plugins: [],
};
