/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#006ce4',
        secondaryColor: '#9BA4B5',
        borderColor: '#9BA4B5',
        mediumtransparent: 'rgba(0,0,0,0.3)',
        bgColor: '#212A3E',
        lightBlack: "#333",
        lightGray: "#d3d3d3",
        lightblue: "#003b95",
        darkblue: "#00224f",
        f5: "#f5f5f5"
      },
      fontFamily: {
        primaryFont: "'Archivo', sans-serif",
        secondaryFont: "'Open Sans', sans-serif"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      }
    },
  },
  plugins: [],
}