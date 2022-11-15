/** @type {import('tailwindcss').Config} */

const SIDEBARWIDTH = '360px'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Clan Medium',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      bold: [
        'Clan Book',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    colors: {
      white: '#fff',
      lightblue: '#F5F8FE',
      gold: '#BDA33B',
      darkblue: '#091725',
      gray: {
        '100': '#EDEDED',
        '200': '#E0E0E0',
        '300': '#C7C7C7',
        '400': '#ADADAD',
        '500': '#949494',
      },
    },
    extend: {
      minWidth: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
      },
      width: {
        sidebar: SIDEBARWIDTH,
      },
      spacing: {
        sidebar: SIDEBARWIDTH,
      },
    },
  },
  plugins: [],
}
