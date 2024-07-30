'use client';

import { VStack } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import AuthNav from './AuthNav';
import UnAuthNav from './UnAuthNav';
import { createClient } from '@/utils/supabase/client';
import { useCallback, useEffect, useState } from 'react';
import { getUser } from '@/utils/supabase/queries';

const Navigation = ({ user }: { user: User | string | null }) => {
  // const supabase = createClient();
  // const fetchUser = useCallback(
  //   async () =>
  //     await getUser(supabase).then((r) => {
  //       if (r) setUser(r);
  //     }),
  //   []
  // );

  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   if (!user) fetchUser();
  // }, [user, fetchUser]);

  return (
    <VStack w='full' spacing={6} fontSize='large'>
      {user ? <AuthNav /> : <UnAuthNav />}
    </VStack>
  );
};

export default Navigation;
