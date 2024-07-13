'use server';

import { cookies } from 'next/headers';

export const setModeCookie = async (colorMode: 'dark' | 'light') => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  cookies().set('colorMode', colorMode, {
    secure: !isDevelopment, // Secure flag should be false in development
    httpOnly: true,
    sameSite: 'strict',
    domain: isDevelopment ? '' : '.ecominmotion.com',
    path: '/', // Ensure the cookie is available for all paths
  });
};

export const getModeCookie = async () => cookies().get('colorMode');
