/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slideRight: {
          from: { transform: 'translate(-100%)' },
          to: { transform: 'translate(0)' },
        },
        slideLeft: {
          from: { transform: 'translate(0)' },
          to: { transform: 'translate(-100%)' },
        },
      },
      animation: {
        slideRight: 'slideRight 400ms linear',
        slideLeft: 'slideLeft 400ms linear',
      },
    },
  },
  plugins: [],
};
