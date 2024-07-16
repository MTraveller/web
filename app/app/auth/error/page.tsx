import { Suspense } from 'react';
import Error from './Error';

function ErrorPage() {
  return (
    <Suspense>
      <Error />
    </Suspense>
  );
}

export default ErrorPage;
