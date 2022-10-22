/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-desktop': "url('/images/bg-desktop.svg')",
        'bg-mobile': "url('/images/bg-mobile.svg')",
      },
      colors: {
        'huddle-violet': '#674BAF',
      },
    }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],

  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "primary": "#674BAF",
          "secondary": "#E882E8",
          "accent": "#FFFFFF",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#00B7F9",
          "success": "#E753CF",
          "warning": "#FCAD82",
          "error": "#FE879D",
        },
      },
    ],
  },
}
