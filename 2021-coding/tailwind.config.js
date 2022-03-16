//const { colors } = require('tailwindcss/defaultTheme') // import default colours
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  variants: {
    extend: {
        margin: ['first'],
        scale: ['group-hover'],
    }
  },
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '960px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1024px',
            // => @media (min-width: 960px) { ... }

            '2xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '3xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
  purge: {
    future: {
      purgeLayersByDefault: true,
      removeDeprecatedGapUtilities: true,
    },
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      // etc.
    ],
    mode: "all",
    //layers: ["utilities"],
  },
  plugins: [
      /**
       require("@tailwindcss/forms"), // use forms
       require("@tailwindcss/typography"), // use typography
       */
      require('@tailwindcss/aspect-ratio'), // aspect ratio
      require('tailwindcss-writing-mode')({
          variants: ['responsive', 'hover']
      }),
      plugin(function({ addUtilities, addComponents, e, prefix, config }) {
          // Add your custom styles here
          const brightVariants = {
              '.brightness-50': {
                  filter: 'brightness(50%)'
              }
          }
          addUtilities(brightVariants, ['responsive', 'hover'])
          const writeModeUtilities = {
              '.horizontal-tb': {
                  writingMode: 'horizontal-tb',
              },
              '.vertical-rl': {
                  writingMode: 'vertical-rl'
              },
              '.vertical-lr': {
                  writingMode: 'vertical-lr'
              }
          }
          addUtilities(writeModeUtilities)
          addComponents({
              '.btn':{
                  backgroundColor: '#2779bd',
                  padding: '1rem 3rem',
                  '&:hover':{
                    backgroundColor: '#3490dc'
                  }
              }
          })
      }),
  ],
  // This is to disable the opacity that genereates a lot of extra css classes
  corePlugins: {
    divideOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
  theme: {
    /* This will overwrite all "colors" configuration to only 
            render default green and white
        colors: {
            'green': colors.white
            'white' : colors.white,
        },
        */
    extend: {
      /** This will extend the current "spacing" configuration
            *  and add a -7 to all spacing options     */
      spacing: {
        'derek': '2rem',
      },
      width: {
        '112' : '28rem',
          'calc18' : 'calc(100% - 18rem);',
          '60px': '60px',
          '108':'27rem',
      },
        height: {
          '60px': '60px',
        },
        zIndex: {
            '-10': -10,
        }
    },
  },
};
