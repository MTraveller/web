import { getSupaUserWithRedirect } from '@/utils/supabase/getUser';
import AccountForm from './AccountForm';

export default async function Account() {
  const {
    data: { user },
  } = await getSupaUserWithRedirect();

  return <AccountForm user={user} />;
}
