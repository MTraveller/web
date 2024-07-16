import { redirect } from 'next/navigation';
import { createClient } from './server';

const getSupaUser = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return { supabase, data, error };
};

export default getSupaUser;
