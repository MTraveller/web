'use client';

import { createClient } from '@/utils/supabase/client';
import { getUser, getUserDetails } from '@/utils/supabase/queries';
import { Heading } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { useStore } from 'zustand';
import { useUserDetailsStore, useUserStore } from '../stores/userStore';

export default function AppHeading() {
  const { id, setUser } = useStore(useUserStore, (state) => ({
    id: state.id,
    setUser: state.setUser,
  }));
  const { setUserDetails, firstname } = useStore(
    useUserDetailsStore,
    (state) => ({
      setUserDetails: state.setUserDetails,
      firstname: state.first_name,
    })
  );
  const supabase = createClient();

  const fetchUserId = useCallback(async () => {
    await getUser(supabase).then((res) => {
      const {
        user: { id, email },
      } = res as { user: { id: string; email: string } };
      if (setUser) setUser(id, email);
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
        if (data && status !== 406)
          setUserDetails(
            available_credit,
            avatar_url,
            billing_address,
            first_name,
            last_name
          );
      });
  }, [supabase, setUser, setUserDetails]);

  useEffect(() => {
    if (!id) fetchUserId();
  }, [id, setUser, fetchUserId]);

  return <Heading>Welcome {firstname ?? ''}</Heading>;
}
