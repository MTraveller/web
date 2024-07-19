'use client';

import fetchSupaUser from '@/services/user-client';
import { GridItem } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
import Header from './Header';

const AuthenticatedGrids = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | 'unauthenticated' | undefined>(
    undefined
  );

  const fetchUser = useCallback(
    async () =>
      await fetchSupaUser().then((r) => {
        console.log('Authenticated: ', r);
        if (!r) {
          setUser('unauthenticated');
        } else if (r) {
          setUser(r?.user);
        }
      }),
    []
  );

  useEffect(() => {
    if (!user) fetchUser();
  }, [user, fetchUser]);

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
        width='full'
        as='main'
        area={'main'}
        display='flex'
        justifyContent='center'
        pt={24}
        px={[0, 1, 2, 4]}
        pb={4}
      >
        {children}
      </GridItem>
    </>
  );
};

export default AuthenticatedGrids;
