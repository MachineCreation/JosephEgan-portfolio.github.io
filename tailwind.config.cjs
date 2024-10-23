import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        'z-1': 'transform: translateZ(-1px)'
      },
      border: {
        'text-box': 'border-radius: .5rem'
      },
      animation: {
        'horizontal-flip': "hflip 3.5s ease-in-out",    // for nav icon
        'rush-right': 'rushRight .5s ease-out',    // for name tag and text box
        'rush-left': 'rushLeft .5s ease-out',    // for textbox

        'roll-in': 'rollIn .75s ease-in-out',   // for nav menu and ___
        'roll-out': 'rollOut .75s ease-in-out',

        'fade-in-0.75': 'fadeIn .75s ease-in-out', // for text boxes
        'fade-out-0.75': 'fadeOut .75s ease-in',  // for pannels
        'fade-in-4.5': 'fadeIn 4.5s ease-out',  // for hero image
        
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
        'rushRight': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100vw)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0vw)'
          }
        },
        'rushLeft': {
          '0%': {
            opacity: 0,
            transform: 'translateX(100vw)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0vw)'
          }
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
          '100%': {
            opacity: 1,
          }
        },
        'fadeOut': {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
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
        },
        '.truncate-paragraph': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
        },
        '.active-button': {
          border: '.1rem solid blue',
          'box-shadow': '0 0 .1rem .1rem rgba(255,255,255,.5)'
        },
        '.form-label': {
          padding: '.2rem',
          margin: '.5rem',
          width: '50%',
          
        },
        '.form-input': {
          color: 'black',
          padding: '.2rem',
          margin: '.5rem',
          width:'50%',
          border: '.2rem solid cyan',
          'border-radius': '.3rem',

        },
        '.bg-hero': {
          'background-image': 'url("/hero.jpg")'
        }
      });
    },
  ],
}

