import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Tomorrow } from 'next/font/google';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

export const tomorrow = Tomorrow({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = extendTheme({
  config,
  // styles: {
  //   global: (props: StyleFunctionProps) => ({
  //     a: {
  //       // color: mode('blue.400', 'blue.500')(props),
  //       fontWeight: 'bold',
  //     },
  //   }),
  // },
  fonts: {
    heading: tomorrow.style.fontFamily,
    body: tomorrow.style.fontFamily,
  },
});

export default theme;
