import { Grid, GridItem, Text } from '@chakra-ui/react';
import Header from './components/ui/Header/Header';
import './globals.css';
import { Chakra } from './providers';
import PrivacyTermsLinks from './components/PrivacyTermsLinks';

export default async function RootLayout({
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
              <Header />
            </GridItem>
            <GridItem
              width='full'
              maxWidth='5xl'
              as='main'
              area={'main'}
              display='flex'
              flexDirection='column'
              justifySelf='center'
              gap={8}
              py={24}
              px={[2, 3, 4, 6]}
            >
              {children}
            </GridItem>
            <GridItem
              as='footer'
              display='flex'
              flexDirection='column'
              area={'footer'}
              gap={3}
              px={4}
            >
              <PrivacyTermsLinks />
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
