'use client';

import { HStack } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AppButton from './AppButton';
import Logo from './Logo';
import MenuDrawer from '../Navbar/MenuDrawer';

export interface Domain {
  env: string;
  hostname: string;
  subdomain: string;
  path: string;
}

export interface UserExtended extends User {
  user: { role: string } | 'unauthenticated' | undefined;
}

const Header = ({ user }: { user: User | 'unauthenticated' | undefined }) => {
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
      <Logo domain={domainDetails} user={user} />
      <HStack spacing={8}>
        {(user || user === 'unauthenticated') && (
          <AppButton domain={domainDetails} user={user} />
        )}
        <MenuDrawer domain={domainDetails} user={user} />
      </HStack>
    </>
  );
};

export default Header;
