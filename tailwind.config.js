/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#065086',
          secondary: '#ffffff',
        },
        category: {
          sleep: '#8B5CF6',      // Purple for sleep
          implant: '#06B6D4',    // Cyan for dental
          rcm: '#2563EB',        // Blue for finance
          referral: '#10B981',   // Emerald for connections
          credentialing: '#EC4899', // Pink for certification
          edai: '#6366F1',       // Indigo for education
          payables: '#2563EB',   // Blue for finance
          auth: '#DC2626',       // Red for security
          reporting: '#0891B2',  // Cyan blue for analytics
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};