'use client';

import { VStack } from '@chakra-ui/react';
import Authenticated from '../drawer/Authenticated';
import UnAuthenticated from '../drawer/UnAuthenticated';
import { UserExtended } from '../Header';
import { User } from '@supabase/supabase-js';

const Navigation = ({
  user,
}: {
  user: User | 'unauthenticated' | undefined;
}) => {
  return (
    <VStack w='full' spacing={6} fontSize='large'>
      {user && user !== 'unauthenticated' ? (
        <Authenticated />
      ) : (
        <UnAuthenticated />
      )}
    </VStack>
  );
};

export default Navigation;
