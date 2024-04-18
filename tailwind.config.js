/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top ',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom',
          },
        },
      },},
  },
  plugins: [],
};
