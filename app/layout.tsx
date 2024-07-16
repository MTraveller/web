import { Grid, GridItem, Text } from '@chakra-ui/react';
import Header from './components/Header';
import './globals.css';
import { Chakra } from './providers';
import AuthenticatedGrids from './components/AuthenticatedGrids';

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
            <AuthenticatedGrids>{children}</AuthenticatedGrids>
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
