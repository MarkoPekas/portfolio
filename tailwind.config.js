module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sexy': '#66f',
        'gray': '#f0f0f0',
        'gray-100': '#f5f5f5',
        'gray-200': '#eeeeee',
        'gray-300': '#e0e0e0',
        'gray-400': '#bdbdbd',
        'gray-500': '#9e9e9e',
        'gray-600': '#686868',
        'gray-700': '#343434',
        'gray-800': '#292929',
        'gray-900': '#161618',
      },
      padding: {
        '4.5': '1.175rem',
      }
    },
  },
  plugins: [],
}