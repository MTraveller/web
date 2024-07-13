import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g., demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers
    .get('host')
    ?.replace('.localhost:3000', `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  // Special case for Vercel preview deployment URLs
  if (
    hostname?.includes('---') &&
    hostname.endsWith(`.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`)
  ) {
    hostname = `${hostname.split('---')[0]}.${
      process.env.NEXT_PUBLIC_ROOT_DOMAIN
    }`;
  }

  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g., /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;

  // Rewrites for app pages
  if (hostname === `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const modeCookie = req.cookies.get('colorMode'); // Access cookies from the request
    console.log('app', modeCookie);

    return NextResponse.rewrite(
      new URL(`/app${path === '/' ? '' : path}`, req.url)
    );
  }

  // Rewrite root application to `/home` folder
  if (
    hostname === 'localhost:3000' ||
    hostname === 'www.localhost:3000' ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN ||
    hostname === `www.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
  ) {
    const modeCookie = req.cookies.get('colorMode'); // Access cookies from the request
    console.log('www', modeCookie);

    return NextResponse.rewrite(
      new URL(`/home${path === '/' ? '' : path}`, req.url)
    );
  }

  return NextResponse.next();
}
