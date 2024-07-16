'use client';

import { useSearchParams } from 'next/navigation';

function ErrorPage() {
  const error = useSearchParams().get('e');
  return <div>{error}</div>;
}

export default ErrorPage;
