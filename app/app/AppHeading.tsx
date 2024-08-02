'use client';

import { createClient } from '@/utils/supabase/client';
import { getUser, getUserDetails } from '@/utils/supabase/queries';
import { Heading } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { useStore } from 'zustand';
import Loader from '../components/Loader';
import { useUserDetailsStore, useUserStore } from '../stores/userStore';

export default function AppHeading() {
  const userState = useStore(useUserStore, (state) => state);
  const detailsState = useStore(useUserDetailsStore, (state) => state);
  const supabase = createClient();

  const fetchUserId = useCallback(async () => {
    await getUser(supabase).then((res) => {
      const {
        user: { id, email },
      } = res as { user: { id: string; email: string } };
      if (userState) userState.setUser(id, email);
    }),
      await getUserDetails(supabase).then((res) => {
        const { data, status } = res;
        const {
          available_credit,
          avatar_url,
          billing_address,
          first_name,
          last_name,
        } = data;
        if (detailsState && data && status !== 406)
          detailsState.setUserDetails(
            available_credit,
            avatar_url,
            billing_address,
            first_name,
            last_name
          );
      });
  }, [supabase, userState, detailsState]);

  useEffect(() => {
    if (!userState?.id) fetchUserId();
  }, [userState, fetchUserId]);

  return <Heading>Welcome {detailsState?.first_name ?? <Loader />}</Heading>;
}
