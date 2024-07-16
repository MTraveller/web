import getSupaUser from '@/utils/supabase/getUser';
import AccountForm from './AccountForm';

export default async function Account() {
  const {
    data: { user },
  } = await getSupaUser();

  return <AccountForm user={user} />;
}
