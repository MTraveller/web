'use server';

import { Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import { cookies } from 'next/headers';
import AppButton from './components/AppButton';
import ColorModeButton from './components/ColorModeButton';
import Logo from './components/Logo';
import './globals.css';
import { Chakra } from './providers';
import { Suspense } from 'react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const modeCookie =
    (cookies().get('colorMode')!.value as 'dark' | 'light') ?? 'dark';

  console.log(typeof modeCookie, modeCookie);

  return (
    <html lang='en' style={{ colorScheme: modeCookie }} data-theme={modeCookie}>
      <body className={`chakra-ui-${modeCookie}`}>
        <Chakra mode={modeCookie}>
          <Grid
            templateAreas={`
              "header"
              "main"
              "footer"
            `}
            gridTemplateRows={'80px 1fr 60px'}
            gridTemplateColumns={'1fr'}
            overflowX='hidden'
            minH='100dvh'
            w='100vw'
          >
            <GridItem
              as='header'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              area={'header'}
              px={4}
            >
              <Logo />
              <HStack spacing={8}>
                <ColorModeButton mode={modeCookie} />
                <AppButton />
              </HStack>
            </GridItem>
            <GridItem
              as='main'
              display='flex'
              area={'main'}
              p={4}
              justifyContent='center'
            >
              {children}
            </GridItem>
            <GridItem
              as='footer'
              display='flex'
              alignItems='center'
              area={'footer'}
              px={4}
            >
              <Text fontSize='xs' color='GrayText'>
                @ {new Date().getFullYear()} eCom in Motion
              </Text>
            </GridItem>
          </Grid>
        </Chakra>
      </body>
    </html>
  );
}
