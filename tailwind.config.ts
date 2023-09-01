import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pokeRed': '#ed1e25',
        'greenColor': '#00FF00',
        'pokeBlue':'#0000a3',
        'pokeYellow':'#ffbf00',
        
      },
      boxShadow: {
        'custom': '2px 2px 20px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
