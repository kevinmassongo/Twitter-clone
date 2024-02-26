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
        'timeline-custom-borderWidth' : '1px'
      },
      borderColor : {
        'timeline-custom-borderColor' : '#2F3336'
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
    },
  },
  plugins: [],
}

// .timeline {
//   flex: 0 0 800px;
//   font-family: 'Inter', sans-serif;
//   border-left: 1px solid #2F3336;
//   border-right: 1px solid #2F3336;
//   max-width: 800px;
// }