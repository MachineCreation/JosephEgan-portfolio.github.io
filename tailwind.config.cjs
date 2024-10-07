
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        'z-1': 'transform: translateZ(-1px)'
      },
      animation: {
        'horizontal-flip': "hflip 3.5s ease-in-out",    // for nav icon

        'roll-in': 'rollIn .75s ease-in-out',   // for nav menu and ___
        'roll-out': 'rollOut .75s ease-in-out',

        'fade-in': 'fadeIn 4.5s ease-out',  // for hero image
      },
      keyframes: {
        'hflip': {    // for nav icon
          '0%': {
            display: 'flex',
            'margin-left': 'calc(50vw - 3rem)',
            'margin-top': 'calc(50dvh - 3rem)',
            transform: 'scale(2) translateY(0px)',
          },
          '10%': {
            display: 'flex',
            'margin-left': 'calc(50vw - 3rem)',
            'margin-top': 'calc(50dvh - 3rem)',
            transform: 'scale(2) translateY(-30px)',            
          },
          '20%': {
            display: 'flex',
            'margin-left': 'calc(50vw - 3rem)',
            'margin-top': 'calc(50dvh - 3rem)',
            transform: 'scale(2) translateY(0px)',
          },
          '25%': {
            display: 'flex',
            'margin-left': 'calc(50vw - 3rem)',
            'margin-top': 'calc(50dvh - 3rem)',
            transform: 'scale(2) translateY(-10px)',
          },
          '30%': {
            display: 'flex',
            'margin-left': 'calc(50vw - 3rem)',
            'margin-top': 'calc(50dvh - 3rem)',
            transform: 'scale(2) translateY(0px)',
          },
          '35%': {},
          '40%': {
            display: 'flex',
            transform: 'scale(2)',
            transform: 'rotateY(0deg)'
          },
          '100%': {
            transform: 'rotateY(1080deg)',
          },
        },
        'rollIn': {     // for nav menu and ___
          '0%': {
            color: 'transparent',
            opacity: 0,
            transform: 'scaleX(.1) scaleY(.25)',
          },
          '50%': { 
            color: 'transparent',
            opacity: 1,
            transform: 'scaleX(1) scaleY(.25)'
          },
          '99%': {
            color: 'transparent',
            transform: 'scaleX(1) scaleY(1)'
          },
          '100%': {
            color: 'inherit',
          }
        },
        'rollOut': {
          '0%': {
            opacity: 1,
            color: 'inherit',
          },
          '1%': {
            opacity: 1,
            color: 'transparent',
            transform: 'scaleX(1) scaleY(1)'
          },
          '50%': { 
            color: 'transparent',
            opacity: 1,
            transform: 'scaleX(1) scaleY(.25)'
          },
          '100%': {
            color: 'transparent',
            opacity: 0,
            transform: 'scaleX(.1) scaleY(.25)',
          }
        },
        'fadeIn': {
          '0%': {
            opacity: 0,
          },
          '75%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
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

