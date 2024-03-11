import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        purple: '#5932EA',
        grey: {
          100: '#F5F5F5',
          400: '#9197B3'
        }
      }
    }
  },
  plugins: []
};
export default config;
