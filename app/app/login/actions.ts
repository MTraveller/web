'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import getDomain from '@/utils/getDomain';
import { createClient } from '@/utils/supabase/server';

export async function login(formData: FormData) {
  const supabase = createClient();
  const {
    domain: { app },
  } = getDomain();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get('email') as string,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
      emailRedirectTo: app,
    },
  });

  if (error?.code) {
    return redirect(`./auth/error?e=${error.code}`);
  }

  revalidatePath('./auth/verify', 'layout');
  return redirect('./auth/verify');
}
