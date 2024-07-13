'use server';

import { cookies } from 'next/headers';

export const setModeCookie = async (colorMode: 'dark' | 'light') => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  const cookieOptions = {
    secure: !isDevelopment, // Secure flag should be false in development
    httpOnly: true,
    sameSite: 'strict',
    path: '/', // Ensure the cookie is available for all paths
  };

  if (!isDevelopment) {
    cookieOptions.domain = '.ecominmotion.com'; // Set domain for production
  }

  cookies().set('colorMode', colorMode, cookieOptions);
};

export const getModeCookie = async () => {
  return cookies().get('colorMode');
};
