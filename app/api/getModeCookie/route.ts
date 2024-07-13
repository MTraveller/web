import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  const colorMode = cookies().get('colorMode')?.value;

  if (cookies().has('colorMode')) {
    const mode = cookies().get('colorMode')!.value;
    return NextResponse.json({ colorMode }, { status: 200 });
  }

  return NextResponse.json(
    { message: 'Color mode cookie not found' },
    { status: 404 }
  );
}
