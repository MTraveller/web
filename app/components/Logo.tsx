import { HStack, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const Logo = () => {
  return (
    <HStack>
      <Image src='/vercel.svg' alt='eCom in Motion' width={32} height={32} />
      <Heading fontSize='xs' fontWeight='500' fontStyle='italic'>
        eCom in Motion
      </Heading>
    </HStack>
  );
};

export default Logo;
