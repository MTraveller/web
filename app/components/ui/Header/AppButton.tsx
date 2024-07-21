'use client';

import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { logout } from '../../../app/auth/logout/actions';
import { Domain } from './Header';

const AppButton = ({
  domain: { env, hostname, subdomain, path },
  user,
}: {
  domain: Domain;
  user: User | 'unauthenticated' | undefined;
}) => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const trail = usePathname();

  useEffect(() => {
    if (user && user !== 'unauthenticated') {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [user]);

  return isUser ? (
    trail === '/account' ? (
      <form action={logout}>
        <Button type='submit' _hover={{ textDecoration: 'none' }}>
          Log out
        </Button>
      </form>
    ) : (
      <Button>
        <Link href='/account' _hover={{ textDecoration: 'none' }}>
          Account
        </Link>
      </Button>
    )
  ) : (
    <Button>
      <Link
        href={(env === 'dev' ? 'http' : 'https') + `://app.${hostname}/login`}
        _hover={{ textDecoration: 'none' }}
      >
        Log in
      </Link>
    </Button>
  );
};

export default AppButton;
