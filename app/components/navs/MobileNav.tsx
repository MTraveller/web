'use client';

import { Link } from '@chakra-ui/next-js';
import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdSubdirectoryArrowRight } from 'react-icons/md';
import useMenuStore from '../../stores/menuStore';

const MobileNav = () => {
  // const { colorMode } = useColorMode();
  const { setOpen } = useMenuStore();

  const handleMenuOpen = () => setOpen(false);

  return (
    <VStack w='full' spacing={6} fontSize='small'>
      <HStack>
        <Link href='/' onClick={handleMenuOpen}>
          Account
        </Link>
        <Divider orientation='vertical' borderWidth={1.5} />
        <Link href='/' onClick={handleMenuOpen}>
          <Center>
            <Icon as={HiOutlineLogout} mr={1} /> Logout
          </Center>
        </Link>
      </HStack>
      <Link href='contact' onClick={handleMenuOpen}>
        Contact
      </Link>
      <Box w='full' position='relative' mt={4}>
        <Divider
          borderWidth={1.5}
          // borderColor={colorMode === 'dark' ? 'black' : 'blue.300'}
        />
        <AbsoluteCenter
          px={2}
          // bgColor={colorMode === 'dark' ? 'black' : 'blue.300'}
          fontStyle='italic'
          fontWeight='light'
          fontSize='xs'
        >
          Tools
        </AbsoluteCenter>
      </Box>
      <Link href='niches' onClick={handleMenuOpen}>
        Niche Ideas
      </Link>
      <VStack>
        <Link href='gsap' onClick={handleMenuOpen}>
          GSAP
        </Link>
        <Link href='gsap/previous' onClick={handleMenuOpen}>
          <Text fontSize='xs'>
            <Icon ml={6} as={MdSubdirectoryArrowRight} />
            Previous
          </Text>
        </Link>
      </VStack>
    </VStack>
  );
};

export default MobileNav;
