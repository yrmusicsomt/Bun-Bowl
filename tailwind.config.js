/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { 
            transform: 'translateY(30px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in',
        slideIn: 'slideIn 0.8s ease-out forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 