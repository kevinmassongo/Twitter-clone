/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      flex : {
        'timeline-custom-1' : '0 0 800px',
        'tweetAvatar-custom-2' : '0 0 70px'
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
      borderRadius : {
        'custom-borderRadius' : '50px'
      },
      maxWidth : {
        'timeline-custom-maxWidth' : '800px',
        'body-custom-maxWidth' : '1800px'
      },
      backgroundColor : {
        'custom-backgroundColor-1' : '#000',
        'custom-backgroundColor-2' : '#6E767D',
      },
      colors : {
        'body-custom-white' : '#FFF',
        'custom-color-1' : '#6E767D',
        'custom-color-2' : '#D9D9D9',
      },
      padding : {
        'header-custom-padding' : '1.5rem 1rem',
        'headerProfil-custom-padding' : '.5rem 1.5rem',
        'tweetEditorProfileContainerContainer-custom-padding' : '1.5rem 2rem 0 2rem',
        'tweetEditorProfileBiographie-custom-padding' : '0 2rem 1.5rem 2rem'
      },
      alignItems : {
        'header-custom-alignItems' : 'center'
      },
      justifyContent : {
        'header-custom-justifyContent' : 'space-between'
      },
      fontSize : {
        'custom-fontSize' : '2rem'
      },
      height : {
        'custom-height' : '200px'
      },
    },
  },
  plugins: [],
}
