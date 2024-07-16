import { getSupaUserWithoutRedirect } from '@/utils/supabase/getUser';
import { User } from '@supabase/supabase-js';

interface SupaUser {
  data: {
    user: User;
  };
}

const fetchSupaUser = async () => {
  const {
    data: { user },
  }: SupaUser = await getSupaUserWithoutRedirect().then((r) => JSON.parse(r));

  if (!user) return null;
  return { user };
};

export default fetchSupaUser;
