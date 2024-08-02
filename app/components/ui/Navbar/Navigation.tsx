'use client';

import { VStack } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import AuthNav from './AuthNav';
import UnAuthNav from './UnAuthNav';
import { createClient } from '@/utils/supabase/client';
import { useCallback, useEffect, useState } from 'react';
import { getUser } from '@/utils/supabase/queries';

const Navigation = ({ user }: { user: string | null | undefined }) => {
  return (
    <VStack w='full' spacing={6} fontSize='large'>
      {user ? <AuthNav /> : <UnAuthNav />}
    </VStack>
  );
};

export default Navigation;
