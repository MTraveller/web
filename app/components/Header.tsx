'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { HStack } from '@chakra-ui/react';
import AppButton from './AppButton';
import MenuDrawer from './MenuDrawer';

export interface Domain {
  domain: {
    env: string;
    hostname: string;
    subdomain: string;
    path: string;
  };
}

const Header = () => {
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
        <AppButton domain={domainDetails} />
        <MenuDrawer domain={domainDetails} />
      </HStack>
    </>
  );
};

export default Header;
