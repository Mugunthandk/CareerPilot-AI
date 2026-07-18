/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#07080B',
          900: '#0A0B0F',
          850: '#0E0F14',
          800: '#121319',
          700: '#1A1B22',
          600: '#232530',
          500: '#2E3140',
          400: '#3A3D4E',
          300: '#5A5E72',
          200: '#8A8FA3',
          100: '#B8BCC9',
          50: '#E6E8EE',
        },
        brand: {
          50: '#EEF6FF',
          100: '#D9E9FF',
          200: '#BCD8FF',
          300: '#8EBEFF',
          400: '#5998FF',
          500: '#2E74FF',
          600: '#1A56F0',
          700: '#1542D8',
          800: '#1736AE',
          900: '#1A3289',
        },
        accent: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        success: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        danger: {
          400: '#F87171',
          500: '#EF4444',
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.36), inset 0 1px 0 rgba(255,255,255,0.06)',
        glow: '0 0 0 1px rgba(46,116,255,0.18), 0 8px 40px rgba(46,116,255,0.18)',
        'glow-accent': '0 0 0 1px rgba(6,182,212,0.18), 0 8px 40px rgba(6,182,212,0.18)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(46,116,255,0.18), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.6' },
          '70%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
