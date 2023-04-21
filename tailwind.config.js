const { blackA, violet, mauve } = require('@radix-ui/colors');
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'head': 'Poppins, sans-serif'
      },
      colors: {
        'main': '#253556',
        'atendimento': '#386BA1',
        'from': '#141930',
        ...blackA,
        ...violet,
        ...mauve,
      },
    
      backgroundImage: {
        'nossaHis' : "url('src/assets/img-nossaHis.png')"
      }
    },
  },
  plugins: [],
}

