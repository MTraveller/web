'use server';

import { createClient } from '@/utils/supabase/server';
import {
  getSupaUserWithoutRedirect,
  getSupaUserWithRedirect,
} from '@/utils/supabase/queries';
import { User } from '@supabase/supabase-js';

interface SupaUser {
  data: {
    user: User;
  };
}

export const fetchSupaUserWOR = async () => {
  const supabase = createClient();

  const {
    data: { user },
  }: SupaUser = await getSupaUserWithoutRedirect(supabase).then((r) =>
    JSON.parse(r)
  );

  console.log('user-client: ', user);
  if (!user) return null;
  return { user };
};

export const fetchSupaUserWR = async () => {
  const supabase = createClient();

  const {
    data: { user },
  }: SupaUser = await getSupaUserWithRedirect(supabase).then((r) =>
    JSON.parse(r)
  );

  console.log('user-client: ', user);
  if (!user) return null;
  return { user };
};
