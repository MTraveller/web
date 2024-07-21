'use client';

import { VStack } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import AuthNav from './AuthNav';
import UnAuthNav from './UnAuthNav';

const Navigation = ({
  user,
}: {
  user: User | 'unauthenticated' | undefined;
}) => {
  return (
    <VStack w='full' spacing={6} fontSize='large'>
      {user && user !== 'unauthenticated' ? <AuthNav /> : <UnAuthNav />}
    </VStack>
  );
};

export default Navigation;
