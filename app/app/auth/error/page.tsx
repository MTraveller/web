import { Suspense } from 'react';
import Error from './Error';

export default async function ErrorPage() {
  return (
    <Suspense>
      <Error />
    </Suspense>
  );
}
