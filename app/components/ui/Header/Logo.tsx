'use client';

import { Link } from '@chakra-ui/next-js';
import { HStack, Heading } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import Image from 'next/image';
import useMenuStore from '../../../stores/menuStore';

const Logo = ({
  domain: { env, hostname },
}: // user,
{
  domain: { env: string; hostname: string };
  // user: User | string | undefined;
}) => {
  const { menuIsOpen, setOpen } = useMenuStore();
  const handleMenuOpen = () => menuIsOpen && setOpen(false);

  return (
    <HStack>
      <Image src='/vercel.svg' alt='eCom in Motion' width={32} height={32} />

      <Heading fontSize='xs' fontWeight='500' fontStyle='italic'>
        <Link
          href={(env === 'dev' ? 'http' : 'https') + `://www.${hostname}`}
          _hover={{ textDecoration: 'none' }}
          onClick={handleMenuOpen}
        >
          eCom in Motion
        </Link>
      </Heading>
    </HStack>
  );
};

export default Logo;
