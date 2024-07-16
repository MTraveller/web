'use client';

import getDomain from '@/utils/getDomain';
import { Link } from '@chakra-ui/next-js';
import {
  AbsoluteCenter,
  Box,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { MdSubdirectoryArrowRight } from 'react-icons/md';
import useMenuStore from '../../stores/menuStore';

const Authenticated = () => {
  const {
    domain: { www, app },
  } = getDomain();
  const { setOpen } = useMenuStore();
  const handleMenuOpen = () => setOpen(false);

  return (
    <>
      <HStack>
        <Link
          width='80px'
          textAlign='end'
          href={`${www}/#about`}
          onClick={handleMenuOpen}
        >
          About
        </Link>
        <Box height='full' mx={4}>
          <Divider orientation='vertical' borderWidth={1.5} />
        </Box>
        <Link width='80px' href={`${www}/#contact`} onClick={handleMenuOpen}>
          Contact
        </Link>
      </HStack>
      <Box w='full' position='relative' mt={4} mb={2}>
        <Divider borderWidth={1.5} borderColor='black' />
        <AbsoluteCenter
          px={2}
          bgColor='black'
          fontStyle='italic'
          fontWeight='light'
          fontSize='md'
        >
          Tools
        </AbsoluteCenter>
      </Box>
      <Link href='/niches' onClick={handleMenuOpen}>
        Niche Ideas
      </Link>
      <VStack>
        <Link href='/gsap' onClick={handleMenuOpen}>
          Average Price
        </Link>
        <Link href='/gsap/previous' onClick={handleMenuOpen}>
          <Text fontSize='xs'>
            <Icon ml={6} as={MdSubdirectoryArrowRight} />
            Previous
          </Text>
        </Link>
      </VStack>
    </>
  );
};

export default Authenticated;
