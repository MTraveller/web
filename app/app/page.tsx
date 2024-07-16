import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import getSupaUser from '@/utils/supabase/getUser';

export default async function App() {
  const { data } = await getSupaUser();

  return <p>Hello {data.user.email}</p>;
}
