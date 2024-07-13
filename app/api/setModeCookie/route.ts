import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

interface CookieOptions {
  secure: boolean;
  httpOnly: true;
  sameSite: 'strict';
  domain?: string;
  path: '/';
}

export async function POST(req: NextRequest) {
  const { colorMode } = await req.json();

  if (!colorMode || (colorMode !== 'dark' && colorMode !== 'light')) {
    return NextResponse.json(
      { message: 'Invalid color mode' },
      { status: 400 }
    );
  }

  const isDevelopment = process.env.NODE_ENV === 'development';

  const cookieOptions: CookieOptions = {
    secure: !isDevelopment,
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
  };

  if (!isDevelopment) {
    cookieOptions.domain = '.ecominmotion.com';
  }

  const response = NextResponse.json({ message: 'Color mode cookie set' });
  cookies().set('colorMode', colorMode, cookieOptions);

  return response;
}
