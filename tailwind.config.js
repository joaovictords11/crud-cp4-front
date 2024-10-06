/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'targetCard': '530px',
      }
    },
    screens: {
      'small' : '570px',
    }
  },
  plugins: [],
}

