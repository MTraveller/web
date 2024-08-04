'use client';

import getDomain from '@/utils/getDomain';
import { Link } from '@chakra-ui/next-js';
import { AbsoluteCenter, Box, Divider, HStack, VStack } from '@chakra-ui/react';
import useMenuStore from '@/app/stores/menuStore';

const UnAuthNav = () => {
  const {
    domain: { www },
  } = getDomain();
  const { setOpen } = useMenuStore();
  const handleMenuOpen = () => setOpen(false);

  return (
    <>
      <HStack>
        <Link
          width='80px'
          textAlign='end'
          href={`${www}/about`}
          onClick={handleMenuOpen}
        >
          About
        </Link>
        <Box height='full' mx={4}>
          <Divider orientation='vertical' borderWidth={1.5} />
        </Box>
        <Link width='80px' href={`${www}/contact`} onClick={handleMenuOpen}>
          Contact
        </Link>
      </HStack>
      <Box w='full' position='relative' mt={4} mb={2}>
        <Divider borderWidth={1.5} borderColor='black' />
        <AbsoluteCenter
          px={3}
          bgColor='black'
          fontStyle='italic'
          fontWeight='light'
          fontSize='md'
        >
          Tools
        </AbsoluteCenter>
      </Box>
      <VStack>
        <Link href={`${www}/niche-ai-tool`} onClick={handleMenuOpen}>
          Niche AI
        </Link>
        <Link href={`${www}/gsap-tool`} onClick={handleMenuOpen}>
          GS Average Price
        </Link>
      </VStack>
    </>
  );
};

export default UnAuthNav;
