/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A3B',
        'navy-dark': '#111E2B',
        accent: '#2E7D52',
        'accent-light': '#E8F5EE',
        white: '#FFFFFF',
        'off-white': '#F7F8FA',
        'body-text': '#1A1A2E',
        muted: '#6B7280',
        subtle: 'rgba(0,0,0,0.06)',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      height: {
        18: '72px',
      },
      boxShadow: {
        card: '0 2px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.12)',
        cta: '0 14px 32px rgba(46,125,82,0.24)',
      },
      fontSize: {
        'fluid-hero': 'clamp(2.8rem, 6vw, 5.5rem)',
        'fluid-h2': 'clamp(1.8rem, 3.5vw, 2.8rem)',
        'fluid-h3': 'clamp(1.2rem, 2vw, 1.5rem)',
        hero: 'clamp(48px, 7vw, 96px)',
        section: 'clamp(36px, 5vw, 64px)',
        lead: 'clamp(17px, 1.4vw, 20px)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-reverse': 'marqueeReverse 20s linear infinite',
      },
    },
  },
  plugins: [],
}
