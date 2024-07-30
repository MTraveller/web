'use client';

import { Button, HStack } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import AppButton from './AppButton';
import Logo from './Logo';
import MenuDrawer from '../Navbar/MenuDrawer';
import { BeatLoader } from 'react-spinners';
import { Link } from '@chakra-ui/next-js';

export interface Domain {
  env: string;
  hostname: string;
  subdomain: string;
  path: string;
}

export interface UserExtended extends User {
  user: { role: string } | string | undefined;
}

const Header = ({ user }: { user: User | string | null }) => {
  const env = process.env.NODE_ENV as 'development' | 'production';
  const [subdomain, setSubdomain] = useState<string>('');
  const path = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined')
      setSubdomain(window.location.host.split('.')[0]);
  }, []);

  const hostname = {
    development: 'localhost:3000',
    production: 'ecominmotion.com',
  };

  const environment = {
    development: 'dev',
    production: 'pro',
  };

  const domainDetails = {
    env: environment[env],
    hostname: hostname[env],
    subdomain,
    path,
  };

  return (
    <>
      <Logo domain={domainDetails} />
      <HStack spacing={8}>
        {(user && <AppButton path={domainDetails.path} />) ?? (
          <Button>
            <Link
              href={
                (domainDetails.env === 'dev' ? 'http' : 'https') +
                `://app.${domainDetails.hostname}/login`
              }
              _hover={{ textDecoration: 'none' }}
              target='_self'
            >
              Log in
            </Link>
          </Button>
        )}
        <MenuDrawer domain={domainDetails} user={user} />
      </HStack>
    </>
  );
};

export default Header;
