/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#050A1A',
          light: '#1e3a8a',
        },
        'light-blue': {
          DEFAULT: '#e0f2fe',
          accent: '#00D1FF',
        },
        'ocean': '#0369a1',
        'ocean-dark': '#0c4a6e',
        'accent-orange': {
          DEFAULT: '#FF5C00',
          hover: '#ea580c',
        },
        'accent-teal': '#0d9488',
        'dark-slate': '#0F172A',
      },
      backgroundImage: {
        'gradient-navy-ocean': 'linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0c4a6e 0%, #0f172a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'ticker': 'ticker 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
