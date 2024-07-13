import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g., /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers.get('host')?.replace('.localhost:3000', '');

  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;

  let colorMode = cookies().get('colorMode')?.value;
  console.log('Existing colorMode cookie:', colorMode);

  if (hostname === `app`) {
    const modeCookie = req.cookies.get('colorMode');
    console.log('app', modeCookie);

    return NextResponse.rewrite(
      new URL(`/app${path === '/' ? '' : path}`, req.url)
    );
  }

  if (hostname === '' || hostname === 'www') {
    const modeCookie = req.cookies.get('colorMode');
    console.log('www', modeCookie);

    return NextResponse.rewrite(
      new URL(`/home${path === '/' ? '' : path}`, req.url)
    );
  }

  return NextResponse.next();
}
