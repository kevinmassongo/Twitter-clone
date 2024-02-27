/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      flex : {
        'timeline-custom-flex' : '0 0 800px'
      },
      fontFamily : {
        'timeline-custom-fontFamily' : 'Inter'
      },
      borderWidth : {
        'custom-borderWidth' : '1px',
      },
      borderColor : {
        'custom-borderColor' : '#2F3336',
      },
      maxWidth : {
        'timeline-custom-maxWidth' : '800px',
        'body-custom-maxWidth' : '1800px'
      },
      backgroundColor : {
        'body-custom-black' : '#000'
      },
      colors : {
        'body-custom-white' : '#FFF'
      },
      padding : {
        'header-custom-padding' : '1.5rem 1rem',
        'headerProfil-custom-padding' : '.5rem 1.5rem'
      },
      alignItems : {
        'header-custom-alignItems' : 'center'
      },
      justifyContent : {
        'header-custom-justifyContent' : 'space-between'
      },
      fontSize : {
        'custom-fontSize' : '2rem'
      }
    },
  },
  plugins: [],
}
