module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1F7A34',
          dark: '#0B3D1E',
          soft: '#EAF6EE',
          light: '#F8FAF8',
        },
        ink: {
          900: '#101828',
          600: '#667085',
        },
      },
      boxShadow: {
        soft:
          '0 18px 32px -22px rgba(16, 24, 40, 0.35), 0 8px 16px -12px rgba(16, 24, 40, 0.22)',
        card:
          '0 24px 60px -42px rgba(16, 24, 40, 0.55), 0 18px 28px -24px rgba(16, 24, 40, 0.26)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Fraunces', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter2: '-0.03em',
      },
    },
  },
  plugins: [],
}
