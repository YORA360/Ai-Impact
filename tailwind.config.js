/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'aimpact-green': '#004124',
        'aimpact-gold': '#F8C638',
      },
      // Menambahkan ukuran custom agar VS Code tidak komplain
      maxWidth: {
        '162.5': '650px',
        '187.5': '750px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'glow-slow': 'glow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 0.4 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};
