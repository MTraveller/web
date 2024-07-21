import { SupabaseClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export const getUser = cache(async (supabase: SupabaseClient) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

export const getSupaUserWithRedirect = cache(
  async (supabase: SupabaseClient) => {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
      redirect('/login');
    }

    return JSON.stringify({ supabase, data, error });
  }
);

export const getSupaUserWithoutRedirect = cache(
  async (supabase: SupabaseClient) => {
    const { data, error } = await supabase.auth.getUser();

    return JSON.stringify({ supabase, data, error });
  }
);

export const getSubscription = cache(async (supabase: SupabaseClient) => {
  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .in('status', ['trialing', 'active'])
    .maybeSingle();

  return subscription;
});

export const getProducts = cache(async (supabase: SupabaseClient) => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { referencedTable: 'prices' });

  return products;
});

export const getUserDetails = cache(
  async (supabase: SupabaseClient) =>
    await supabase.from('users').select('*').single()
);
