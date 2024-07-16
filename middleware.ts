import { updateSession } from '@/utils/supabase/middleware';
import { type NextRequest, NextResponse } from 'next/server';

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
  await updateSession(req);

  const url = req.nextUrl;

  const isDevelopment = process.env.NODE_ENV === 'development';
  let hostname = req.headers
    .get('host')
    ?.replace(isDevelopment ? '.localhost:3000' : '.ecominmotion.com', '');

  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;

  if (hostname === `app`) {
    return NextResponse.rewrite(
      new URL(`/app${path === '/' ? '' : path}`, req.url)
    );
  }

  if (hostname === `www`) {
    return NextResponse.rewrite(
      new URL(`/home${path === '/' ? '' : path}`, req.url)
    );
  }

  return NextResponse.next();
}
