'use client';

import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';

const AppButton = () => {
  return (
    <Button>
      <Link href={'https://app.ecominmotion.com/sign-in'}>Sign in</Link>
    </Button>
  );
};

export default AppButton;
