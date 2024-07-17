/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn"],
      },
    colors: {
      'primary-900':'#4a6dff',
      'secondary-900' : '#2A2D53',
      'secondary-800': '#3F4264',
      'secondary-700': '#555775',
      'secondary-600':'#6a6c87',
      'hover-delete' : 'F44336',
      'cost':'#36385380',
      'price':'#4A6DFF',
      'hr-color':'#dfdfe580',
    },
    fontWeight: {
      extraBlack: '950',
  
    },
    dropShadow:{
      'avatar':'#4a6dff33'
    }
  
  },
},
  plugins: [],
};
