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
        'atendimento': '#386BA1'
      },
    },
  },
  plugins: [],
}

