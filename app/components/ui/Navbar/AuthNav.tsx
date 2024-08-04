'use client';

import useMenuStore from '@/app/stores/menuStore';
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

const AuthNav = () => {
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
          href={`/account`}
          onClick={handleMenuOpen}
        >
          Account
        </Link>
        <Box height='full' mx={4}>
          <Divider orientation='vertical' borderWidth={1.5} />
        </Box>
        <Link href={`${www}/about`} onClick={handleMenuOpen}>
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
          px={2}
          bgColor='black'
          fontStyle='italic'
          fontWeight='light'
          fontSize='md'
        >
          Tools
        </AbsoluteCenter>
      </Box>
      <Link href='/niche-ai' onClick={handleMenuOpen}>
        Niche AI
      </Link>
      <VStack>
        <Link href='/gs-average-price' onClick={handleMenuOpen}>
          GS Average Price
        </Link>
        <Link href='/gs-average-price/previous' onClick={handleMenuOpen}>
          <Text fontSize='xs'>
            <Icon ml={6} as={MdSubdirectoryArrowRight} />
            Previous
          </Text>
        </Link>
      </VStack>
    </>
  );
};

export default AuthNav;
