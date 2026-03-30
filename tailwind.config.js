/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        "meteor-effect": "meteor 5s linear infinite",
      },
      borderRadius: {
        '2xl': '1rem',
        'xl': '0.75rem',
        'lg': '0.5rem',
        'md': '0.375rem',
        'sm': '0.25rem',
      }
    },
  },
  plugins: [],
}
