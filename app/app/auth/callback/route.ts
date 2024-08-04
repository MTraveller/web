import getDomain from '@/utils/getDomain';
import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const {
    domain: { app },
  } = getDomain();

  const code = searchParams.get('code');
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${app}${next}`);
    }
    return NextResponse.redirect(`${app}/auth/error?e=${error?.code}`);
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(
    `${app}/auth/error?e=Could not login using the chosen login!`
  );
}
