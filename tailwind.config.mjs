/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff4ff',
          100: '#dbe6fe',
          200: '#bfd3fe',
          300: '#93b4fd',
          400: '#6090fa',
          500: '#3b6cf6',
          600: '#2553eb',
          700: '#1a40d8',
          800: '#1c35af',
          900: '#1c318a',
          950: '#162054',
        },
        /** Faísca / metal quente — contraste com o azul marca */
        spark: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        steel: {
          750: '#27272a',
          850: '#18181b',
          925: '#0f0f12',
        },
      },
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Antonio', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'display-tight': '-0.02em',
        'caps': '0.2em',
      },
      boxShadow: {
        'industrial': '0 24px 48px -12px rgba(15, 23, 42, 0.35)',
        'industrial-sm': '0 8px 24px -8px rgba(15, 23, 42, 0.25)',
        'spark': '0 0 40px -8px rgba(245, 158, 11, 0.45)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(at 80% 0%, rgba(37, 83, 235, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(245, 158, 11, 0.06) 0px, transparent 45%)',
        'mesh-dark':
          'radial-gradient(ellipse at 30% 0%, rgba(37, 99, 235, 0.15) 0px, transparent 55%), radial-gradient(at 100% 80%, rgba(245, 158, 11, 0.08) 0px, transparent 50%)',
      },
      animation: {
        'fade-up': 'fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
