/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        testimonial:'url(./src/assets/img/20.png)'
      }
    },
    colors:{
      white:"#ffffff",
      black:"#000000",
      primary:"#d9a647",
      agree:"#00aa55",
      warning:"#FF6347",
      secondary:"#414645",
      primary:{
        50:"#fbfcea",
        100:"#f5f6cb",
        200:"#f0f0a9",
        300:"#ebea8a",
        400:"#e7e674",
        500:"#e4e161",
        600:"#e2d15b",
        700:"#debb51",
        800:"#d9a647",
        900:"#d08337",
      },
      golden:{
        50: "#fef9e8", 
        100: "#fbefc5", 
        200: "#f8e6a1", 
        300: "#f4dc7f", 
        400: "#efd466", 
        500: "#ecce50", 
        600: "#dbbd4b", 
        700: "#c6a845", 
        800: "#b19240", 
        900: "#8c6f38", 
      },
      secondary:{
        50:"#f6fcfb",
        100:"#f1f7f6",
        200:"#ebf1f0",
        300:"#dee4e3",
        400:"#bbc1c0",
        500:"#9da3a2",
        600:"#747978",
        700:"#606564",
        800:"#414645",
        900:"#202424",
      },
      gray:{
        50:"#f1f6ff",
        100:"#e6ecfe",
        200:"#d9def1",
        300:"#c6cbdd",
        400:"#a0a5b7",
        500:"#7f8495",
        600:"#585d6d",
        700:"#464b5a",
        800:"#282d3b",
        900:"#060c1b",
      }
    }
  },
  plugins: [],
}

