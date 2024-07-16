'use server';

import { redirect } from 'next/navigation';
import { createClient } from './server';

export const getSupaUserWithRedirect = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  return { supabase, data, error };
};

export const getSupaUserWithoutRedirect = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return JSON.stringify({ supabase, data, error });
};
