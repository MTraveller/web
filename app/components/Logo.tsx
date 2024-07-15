'use client';

import { Link } from '@chakra-ui/next-js';
import { HStack, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { Domain } from './Header';

const Logo = ({ domain }: Domain) => {
  const { env, hostname } = domain;
  return (
    <HStack>
      <Image src='/vercel.svg' alt='eCom in Motion' width={32} height={32} />

      <Heading fontSize='xs' fontWeight='500' fontStyle='italic'>
        <Link
          href={(env === 'dev' ? 'http' : 'https') + `://www.${hostname}`}
          _hover={{ textDecoration: 'none' }}
        >
          eCom in Motion
        </Link>
      </Heading>
    </HStack>
  );
};

export default Logo;
