import { Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import ColorModeButton from '../components/ColorModeButton';
import Logo from '../components/Logo';
import MenuDrawer from '../components/MenuDrawer';

const BaseTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
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
        <HStack spacing={5}>
          <ColorModeButton />
          <MenuDrawer />
        </HStack>
      </GridItem>
      <GridItem as='main' area={'main'} p={4}>
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
  );
};

export default BaseTemplate;
