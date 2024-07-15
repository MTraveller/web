import { Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import AppButton from './components/AppButton';
import Logo from './components/Logo';
import MenuDrawer from './components/MenuDrawer';
import './globals.css';
import { Chakra } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' style={{ colorScheme: 'dark' }} data-theme={'dark'}>
      <body className={`chakra-ui-${'dark'}`}>
        <Chakra>
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
                <AppButton />
                <MenuDrawer />
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
