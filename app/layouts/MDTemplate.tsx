'use client';

import { Box, Grid, GridItem, Text, useColorMode } from '@chakra-ui/react';
import ColorModeSwitch from '../components/ColorModeButton';
import Logo from '../components/Logo';
import PrivacyTermsLinks from '../components/PrivacyTermsLinks';
import { PropsWithChildren } from 'react';

const MDTemplate = ({ children }: { children: React.ReactNode }) => {
  // const { colorMode } = useColorMode();
  return (
    <Grid
      templateAreas={`
        "header header"
        "nav main"
        "footer main"
      `}
      gridTemplateRows={'80px 1fr 60px'}
      gridTemplateColumns={'180px 1fr'}
      w='100vw'
      minH='100vh'
    >
      <GridItem
        as='header'
        display='flex'
        pos='sticky'
        justifyContent='space-between'
        alignItems='center'
        area={'header'}
        // bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
        zIndex={99}
        top='0'
        px={4}
      >
        <Logo />
        <Box display='flex' w='133.6px' justifyContent='center'>
          <ColorModeSwitch />
        </Box>
      </GridItem>
      <GridItem
        as='nav'
        h='calc(100vh - 140px)'
        pos='sticky'
        area={'nav'}
        top='80px'
        px={4}
      ></GridItem>
      <GridItem as='main' area={'main'} mt={3} px={4} pt={8} pb={12}>
        {children}
      </GridItem>
      <GridItem
        as='footer'
        display='flex'
        flexDir='column'
        pos='sticky'
        alignItems='center'
        area={'footer'}
        bottom='0'
        gap={2}
        px={4}
      >
        <PrivacyTermsLinks />
        <Text fontSize='2xs'>@ {new Date().getFullYear()} eCom in Motion</Text>
      </GridItem>
    </Grid>
  );
};

export default MDTemplate;
