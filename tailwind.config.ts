module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#dfeeff',
          500: '#2457f5',
          600: '#1b45d0',
          700: '#1638a9'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(36, 87, 245, 0.12)'
      }
    }
  },
  plugins: []
};
