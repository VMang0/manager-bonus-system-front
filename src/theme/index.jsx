import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material';

export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        greyLight1: {
          DEFAULT: '#EBEBEB',
          950: '#6D6D6D',
          900: '#7B7B7B',
          800: '#979797',
          700: '#B3B3B3',
          600: '#CFCFCF',
          500: '#EBEBEB',
          400: '#FFFFFF',
          300: '#FFFFFF',
          200: '#FFFFFF',
          100: '#FFFFFF',
          50: '#FFFFFF',
        },
        greyLight2: {
          DEFAULT: '#D5D5D5',
          950: '#575757',
          900: '#656565',
          800: '#818181',
          700: '#9D9D9D',
          600: '#B9B9B9',
          500: '#D5D5D5',
          400: '#E9E9E9',
          300: '#FEFEFE',
          200: '#FFFFFF',
          100: '#FFFFFF',
          50: '#FFFFFF',
        },
        grey: {
          DEFAULT: '#C0C0C0',
          950: '#424242',
          900: '#505050',
          800: '#6C6C6C',
          700: '#888888',
          600: '#A4A4A4',
          500: '#C0C0C0',
          400: '#D4D4D4',
          300: '#E9E9E9',
          200: '#FDFDFD',
          100: '#FFFFFF',
          50: '#FFFFFF',
        },
        yellow: {
          DEFAULT: '#FAC000',
          950: '#000000',
          900: '#1A1400',
          800: '#523F00',
          700: '#8A6A00',
          600: '#C29500',
          500: '#FAC000',
          400: '#FFCC24',
          300: '#FFD64D',
          200: '#FFDF75',
          100: '#FFE99E',
          50: '#FFEDB3',
        },
        darkBlue: {
          DEFAULT: '#164D80',
          950: '#000000',
          900: '#000000',
          800: '#000000',
          700: '#061320',
          600: '#0E3050',
          500: '#164D80',
          400: '#1C62A3',
          300: '#2277C6',
          200: '#348BDC',
          100: '#579FE2',
          50: '#68A9E5',
          20: '#ddeeff',
        },
        darkerBlue: {
          DEFAULT: '#0F3559',
          950: '#000000',
          900: '#000000',
          800: '#000000',
          700: '#000000',
          600: '#071829',
          500: '#0F3559',
          400: '#154A7C',
          300: '#1B5F9F',
          200: '#2173C2',
          100: '#2F88DC',
          50: '#4192DF',
        },
        black: {
          DEFAULT: '#222222',
          950: '#000000',
          900: '#000000',
          800: '#000000',
          700: '#000000',
          600: '#060606',
          500: '#222222',
          400: '#363636',
          300: '#4B4B4B',
          200: '#5F5F5F',
          100: '#747474',
          50: '#7E7E7E',
        },
        red: {
          DEFAULT: '#FF0000',
          950: '#030000',
          900: '#1F0000',
          800: '#570000',
          700: '#8F0000',
          600: '#C70000',
          500: '#FF0000',
          400: '#FF2929',
          300: '#FF5252',
          200: '#FF7A7A',
          100: '#FFA3A3',
          50: '#FFB8B8',
        },
      }
    : {
        greyLight1: {
          DEFAULT: '#EBEBEB',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#EBEBEB',
          600: '#CFCFCF',
          700: '#B3B3B3',
          800: '#979797',
          900: '#7B7B7B',
          950: '#6D6D6D',
        },
        greyLight2: {
          DEFAULT: '#D5D5D5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FEFEFE',
          400: '#E9E9E9',
          500: '#D5D5D5',
          600: '#B9B9B9',
          700: '#9D9D9D',
          800: '#818181',
          900: '#656565',
          950: '#575757',
        },
        grey: {
          DEFAULT: '#C0C0C0',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FDFDFD',
          300: '#E9E9E9',
          400: '#D4D4D4',
          500: '#C0C0C0',
          600: '#A4A4A4',
          700: '#888888',
          800: '#6C6C6C',
          900: '#505050',
          950: '#424242',
        },
        yellow: {
          DEFAULT: '#FAC000',
          50: '#FFEDB3',
          100: '#FFE99E',
          200: '#FFDF75',
          300: '#FFD64D',
          400: '#FFCC24',
          500: '#FAC000',
          600: '#C29500',
          700: '#8A6A00',
          800: '#523F00',
          900: '#1A1400',
          950: '#000000',
        },
        darkBlue: {
          DEFAULT: '#164D80',
          20: '#ddeeff',
          50: '#68A9E5',
          100: '#579FE2',
          200: '#348BDC',
          300: '#2277C6',
          400: '#1C62A3',
          500: '#164D80',
          600: '#0E3050',
          700: '#061320',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        darkerBlue: {
          DEFAULT: '#0F3559',
          50: '#4192DF',
          100: '#2F88DC',
          200: '#2173C2',
          300: '#1B5F9F',
          400: '#154A7C',
          500: '#0F3559',
          600: '#071829',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        black: {
          DEFAULT: '#222222',
          50: '#7E7E7E',
          100: '#747474',
          200: '#5F5F5F',
          300: '#4B4B4B',
          400: '#363636',
          500: '#222222',
          600: '#060606',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        red: {
          DEFAULT: '#FF0000',
          50: '#FFB8B8',
          100: '#FFA3A3',
          200: '#FF7A7A',
          300: '#FF5252',
          400: '#FF2929',
          500: '#FF0000',
          600: '#C70000',
          700: '#8F0000',
          800: '#570000',
          900: '#1F0000',
          950: '#030000',
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.black['950'],
            },
            secondary: {
              main: colors.grey['50'],
            },
            neutral: {
              main: colors.black['600'],
              dark: colors.black['400'],
              light: colors.greyLight1.DEFAULT,
            },
            custom: {
              main: colors.grey['800'],
            },
          }
        : {
            primary: {
              main: colors.greyLight1.DEFAULT,
            },
            secondary: {
              main: colors.black['950'],
            },
            neutral: {
              main: colors.grey['300'],
              light: colors.grey.DEFAULT,
              dark: colors.greyLight2['950'],
            },
            custom: {
              main: colors.grey['950'],
            },
          }),
    },
    typography: {
      fontFamily: ['Montserrat'],
      fontSize: 14,
      fontWeight: 400,
      h1: {
        fontFamily: ['Montserrat'],
        fontSize: 22,
        fontWeight: 550,
      },
      h2: {
        fontFamily: ['Montserrat'],
        fontSize: 18,
        fontWeight: 400,
      },
      h3: {
        fontFamily: ['Montserrat'],
        fontSize: 16,
        fontWeight: 500,
      },
      h4: {
        fontFamily: ['Montserrat'],
        fontSize: 14,
        fontWeight: 500,
      },
      p: {
        fontFamily: ['Montserrat'],
        fontSize: 12,
        fontWeight: 400,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [colorMode, theme];
};
