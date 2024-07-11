'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../app/theme';

export function Chakra({
  mode,
  children,
}: {
  mode: string;
  children: React.ReactNode;
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
