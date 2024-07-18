'use client';

import { VStack } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import Authenticated from '../drawer/Authenticated';
import UnAuthenticated from '../drawer/UnAuthenticated';

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
