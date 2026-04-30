/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        bg2: '#111111',
        bg3: '#1a1a1a',
        line: 'rgba(255,255,255,0.08)',
        line2: 'rgba(255,255,255,0.15)',
        text: '#f0ede8',
        muted: '#888880',
        accent: '#e8c97a',
        accent2: '#c97a7a',
      },
      fontFamily: {
        mono: ["'DM Mono'", 'monospace'],
        sans: ["'DM Sans'", 'sans-serif'],
        serif: ["'Fraunces'", 'serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
        xs: '0.7rem',
        sm: '0.75rem',
        base: '0.875rem',
      },
    },
  },
  plugins: [],
};
