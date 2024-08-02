'use client';

import { useStore, useUserStore } from '@/app/stores/userStore';
import { HStack } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import MenuDrawer from '../Navbar/MenuDrawer';
import AppButton from './AppButton';
import Logo from './Logo';

export interface Domain {
  env: string;
  hostname: string;
  subdomain: string;
  path: string;
}

export interface UserExtended extends User {
  user: { role: string } | string | undefined;
}

const Header = () => {
  const env = process.env.NODE_ENV as 'development' | 'production';
  const [subdomain, setSubdomain] = useState<string>('');
  const path = usePathname();

  const id = useStore(useUserStore, (state) => state.id);

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
        <AppButton domain={domainDetails} user={id} />
        <MenuDrawer domain={domainDetails} user={id} />
      </HStack>
    </>
  );
};

export default Header;
