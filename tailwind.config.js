/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
          colors: {
            black: '#09090c',
            darkGray: '#121212',
            brightRed: 'hsl(12, 88%, 59%)',
            brightRedLight: 'hsl(12, 88%, 69%)',
            brightRedSupLight: 'hsl(12, 88%, 95%)',
            darkBlue: 'hsl(228, 39%, 23%)',
            darkGrayishBlue: 'hsl(227, 12%, 61%)',
            veryDarkBlue: 'hsl(233, 12%, 13%)',
            greenColor: "#3ABC76",
          },
          keyframes: {
            scroll: {
              '100%': { transform: 'translateX(-100%)' }
            },
            scroll2: {
              '100%': { transform: 'translateX(100%)' },
              '0%': { transform: 'translateX(0%)' },
            },
          },
          fontFamily: {
            'Gorditas': ['Gorditas'],
            'mons': ['Montserrat', 'sans-serif'],
            'outfit': ['Outfit'],
            'pop': ['Poppins'],
            'nu': ['Nunito Sans'],
            'int': ['Inter'],
          },
        },
        screens: {
          'xsm': { 'min': '320px', 'max': '480px' },
          'sm': { 'min': '481px', 'max': '720px'},
          'md': { 'min': '721px', 'max': '1024px' },
          'lg': { 'min': '1025px', 'max': '1599px' },
          'xl': { 'min': '1600px', 'max': '1999px' },
          '2xl': { 'min': '2000px'},
        },
      },
    plugins: [],
}