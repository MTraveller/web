'use client';

import fetchSupaUser from '@/services/user-client';
import { GridItem } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import Header from './Header';

const AuthenticatedGrids = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | 'unauthenticated' | undefined>(
    undefined
  );

  useEffect(() => {
    if (!user)
      fetchSupaUser().then((r) => {
        console.log('Authenticated: ', r);
        if (!r) {
          setUser('unauthenticated');
        } else if (r) {
          setUser(r?.user);
        }
      });
  }, [user]);

  return (
    <>
      <GridItem
        as='header'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        area={'header'}
        px={4}
      >
        <Header user={user} />
      </GridItem>
      <GridItem
        as='main'
        display='flex'
        area={'main'}
        p={4}
        justifyContent='center'
      >
        {children}
      </GridItem>
    </>
  );
};

export default AuthenticatedGrids;
