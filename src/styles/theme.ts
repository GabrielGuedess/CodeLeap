import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export const theme = {
  grid: {
    container: '80rem',
  },
  colors: {
    background: '#DDDDDD',
    white: '#FFFFFF',
    primary: '#6084e9',
    primaryText: '#000000',
    secondaryText: '#CCCCCC',
    inputBorder: '#777777',
    username: '#666666',
    overlay: '#777777',
    border: '#CCCCCC',
    boxShadow: '#B8BEF3',
    borderButton: '#999999',
    red: '#FF5151',
    green: '#47B960',
  },
  font: {
    family: {
      primary: roboto.style.fontFamily,
    },
  },
  transition: {
    default: '0.3s ease-in-out',
  },
} as const;
