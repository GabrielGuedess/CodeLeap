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
    primary: '#7695EC',
    primaryText: '#000000',
    secondaryText: '#CCCCCC',
    inputBorder: '#777777',
    username: '#777777',
    border: '#CCCCCC',
    red: '#FF5151',
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
