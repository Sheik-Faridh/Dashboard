/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: {
          800: '#2c5cc5',
        },
        smoke: {
          25: '#f5f7f9',
          50: '#ebeff3',
          100: '#cfd7df',
          300: '#92a2b1',
          700: '#475867',
        },
        elephant: {
          800: '#264966',
          900: '#12344d',
        },
        permission: {
          800: '#d72d30',
          900: '#c82124',
        },
        casablanca: {
          900: '#e86f25',
        },
      },
    },
  },
  plugins: [],
}
