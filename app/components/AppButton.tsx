'use client';

import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';
import { Domain } from './Header';

const AppButton = ({ domain }: Domain) => {
  const { env, hostname, subdomain, path } = domain;
  return (
    <Button>
      <Link
        href={(env === 'dev' ? 'http' : 'https') + `://app.${hostname}/login`}
        _hover={{ textDecoration: 'none' }}
      >
        {subdomain &&
        !['/login', '/signup'].includes(path) &&
        subdomain === 'app'
          ? 'Log out'
          : 'Log in'}
      </Link>
    </Button>
  );
};

export default AppButton;
