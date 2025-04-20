// tailwind.config.js
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // adjust to your project
 darkMode: 'class',
 theme: {
   extend: {
     colors: {
       primary: '#1D4ED8',
       secondary: '#F59E0B',

       headline: '#111827',
       title: '#374151',
       description: '#6B7280',

       button: '#10B981',
       buttonSecondary: '#3B82F6',

       background: '#F9FAFB',
       surface: '#FFFFFF',
       border: '#E5E7EB',

       success: '#22C55E',
       error: '#EF4444',
       warning: '#FACC15',
       info: '#3B82F6',

       dark: {
         background: '#1F2937',
         surface: '#111827',
         headline: '#F3F4F6',
         title: '#D1D5DB',
         description: '#9CA3AF',
       },
     },

     fontFamily: {
       sans: ['Inter', 'ui-sans-serif'],
       display: ['Poppins', 'ui-sans-serif'],
     },

     borderRadius: {
       'xl': '1rem',
       '2xl': '1.5rem',
     },

     boxShadow: {
       card: '0 4px 6px rgba(0,0,0,0.1)',
     },

     spacing: {
       section: '6rem',
     },

     transitionDuration: {
       DEFAULT: '300ms',
     },
   },
 },
 plugins: [
   require('@tailwindcss/forms'),
   require('@tailwindcss/typography'),
   require('@tailwindcss/aspect-ratio'),
 ],
}