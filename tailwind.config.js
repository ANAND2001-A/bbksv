// tailwind.config.js
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        button: 'var(--color-button)',
        'primary-500': 'var(--color-primary-500)',
        'secondary-500': 'var(--color-secondary-500)',
        gradient: 'var(--gradient-soft)',
      },
      keyframes: {
        'pulse-custom': {
          '0%, 100%': {
            transform: 'scale(1)',
            color: 'var(--color-primary)',
          },
          '50%': {
            transform: 'scale(1.1)',
            color: 'var(--color-secondary)',
          },
        },
      },
      animation: {
        'pulse-custom': 'pulse-custom 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
