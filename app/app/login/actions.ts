'use server';

import getDomain from '@/utils/getDomain';
import { createClient } from '@/utils/supabase/server';
import { Provider } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const supabase = createClient();
  const {
    domain: { app },
  } = getDomain();

  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get('email') as string,
    options: {
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

export async function oAuthLogin(provider: Provider) {
  const supabase = createClient();

  const {
    domain: { app },
  } = getDomain();

  const callback = '/auth/callback';

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: app + callback,
    },
  });

  if (error?.code) {
    return redirect(`./auth/error?e=${error.code}`);
  }

  return redirect(data.url!);
}
