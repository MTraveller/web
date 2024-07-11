'use server';

import { cookies } from 'next/headers';

export const setModeCookie = async (colorMode: 'dark' | 'light') => {
  cookies().set('colorMode', colorMode === 'dark' ? 'light' : 'dark', {
    secure: true,
    sameSite: 'strict',
  });
};

export const getModeCookie = async () => cookies().get('colorMode');
