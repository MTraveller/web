'use client';

import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AppButton = () => {
  const env = process.env.NODE_ENV as 'development' | 'production';
  const [subdomain, setSubdomain] = useState<string>();
  const path = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined')
      setSubdomain(window.location.host.split('.')[0]);
  }, []);

  const logIn = {
    development: 'http://app.localhost:3000/login',
    production: 'https://app.ecominmotion.com/login',
  };

  console.log(subdomain);
  return (
    <Button>
      <Link href={logIn[env]} className='!no-underline'>
        {subdomain && path !== '/login' && subdomain === 'app'
          ? 'Log out'
          : 'Log in'}
      </Link>
    </Button>
  );
};

export default AppButton;
