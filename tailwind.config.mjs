/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /** Aço / zinco — CTAs secundários e superfícies metálicas */
        brand: {
          50: '#f4f4f5',
          100: '#e4e4e7',
          200: '#d4d4d8',
          300: '#a1a1aa',
          400: '#71717a',
          500: '#52525b',
          600: '#3f3f46',
          700: '#27272a',
          800: '#18181b',
          900: '#09090b',
          950: '#030303',
        },
        /** Âmbar ferrugem — acento quente artesanal */
        spark: {
          200: '#e8c872',
          300: '#d4a843',
          400: '#c4941f',
          500: '#b8860b',
          600: '#9a7209',
          700: '#7a5a07',
          800: '#5c4305',
        },
        steel: {
          750: '#27272a',
          850: '#141416',
          925: '#0a0a0c',
        },
        contact: {
          DEFAULT: '#111111',
          light: '#161616',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'display-tight': '0.02em',
        caps: '0.22em',
      },
      boxShadow: {
        industrial: '0 24px 48px -12px rgba(0, 0, 0, 0.45)',
        'industrial-sm': '0 8px 24px -8px rgba(0, 0, 0, 0.35)',
        spark: '0 0 32px -6px rgba(184, 134, 11, 0.35)',
        'metal-inset': 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(at 80% 0%, rgba(161, 161, 170, 0.12) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(184, 134, 11, 0.08) 0px, transparent 45%)',
        'mesh-dark':
          'radial-gradient(ellipse at 20% 0%, rgba(184, 134, 11, 0.12) 0px, transparent 55%), radial-gradient(at 100% 80%, rgba(113, 113, 122, 0.1) 0px, transparent 50%)',
        'metal-sheen':
          'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
      },
      animation: {
        'fade-up': 'fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.65' },
        },
      },
    },
  },
  plugins: [],
};
