import { getSupaUserWithRedirect } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import AccountForm from './AccountForm';

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await getSupaUserWithRedirect(supabase);

  return <AccountForm user={user} />;
}
