import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        'z-1': 'transform: translateZ(-1px)'
      },
      animation: {
        'horizontal-flip': "hflip 3.5s ease-in-out"
      },
      keyframes: {
        'hflip': {
          '0%': {
            display: 'flex',
            margin: '40%',
            transform: 'scale(2) translateY(0px)',
          },
          '5%': {
            display: 'flex',
            margin: '40%',
            transform: 'scale(2) translateY(-30px)',            
          },
          '10%': {
            display: 'flex',
            margin: '40%',
            transform: 'scale(2) translateY(0px)',
          },
          '15%': {
            display: 'flex',
            margin: '40%',
            transform: 'scale(2) translateY(-10px)',
          },
          '20%': {
            display: 'flex',
            margin: '40%',
            transform: 'scale(2) translateY(0px)',
          },
          '25%': {},
          '30%': {
            display: 'flex',
            transform: 'scale(2)',
            transform: 'rotateY(0deg)'
          },
          '100%': {transform: 'rotateY(1080deg)'},
        }
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.translate-z-1': {
          'transform': 'translateZ(-1px)'
        }
      });
    },
  ],
}

