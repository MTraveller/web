'use client';

import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { logout } from '../app/auth/logout/actions';
import { Domain, UserExtended } from './Header';
import { User } from '@supabase/supabase-js';

const AppButton = ({
  domain: { env, hostname, subdomain, path },
  user,
}: {
  domain: Domain;
  user: User | 'unauthenticated' | undefined;
}) => {
  const [isUser, setIsUser] = useState<boolean>(false);

  useEffect(() => {
    if (user && user !== 'unauthenticated') {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [user]);

  console.log('isUser', isUser);
  return isUser ? (
    <form action={logout}>
      <Button type='submit'>Log out</Button>
    </form>
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
