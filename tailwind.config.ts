import { Montserrat} from 'next/font/google'
import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')


const config: Config = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'], 
        'Montserrat': ['Montserrat'], 
        'Nastasha Walker':['Nastasha Walker'],

       
      }
    },
  },
  plugins: [],
}
export default config
