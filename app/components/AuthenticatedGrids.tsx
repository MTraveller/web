'use client';

import { createClient } from '@/utils/supabase/client';
import { getUser } from '@/utils/supabase/queries';
import { GridItem } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
import Header from './ui/Header/Header';

const AuthenticatedGrids = ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();
  const fetchUser = useCallback(
    async () =>
      await getUser(supabase).then((r) => {
        if (r) setUser(r);
      }),
    [supabase]
  );

  const [user, setUser] = useState<User | null>(null);

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
        py={24}
        px={[0, 1, 2, 4]}
      >
        {children}
      </GridItem>
    </>
  );
};

export default AuthenticatedGrids;
