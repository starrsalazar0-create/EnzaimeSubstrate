export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        heading: ['Cormorant Garamond', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        botanical: '#6f4d5b',
        blush: '#f6d6da',
        deepRose: '#9f5673',
        sage: '#8ea68e',
        ivory: '#f6ece6'
      }
    }
  },
  plugins: []
};
