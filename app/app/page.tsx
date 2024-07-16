import { getSupaUserWithRedirect } from '@/utils/supabase/getUser';

export default async function App() {
  const {
    data: { user },
  } = await getSupaUserWithRedirect();

  return <p>Hello {user.email}</p>;
}
