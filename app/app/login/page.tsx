'use client';

import { Box, Flex } from '@chakra-ui/react';
import AuthForm from '../form/AuthForm';
import { login } from './actions';
import { Link } from '@chakra-ui/next-js';

export default function LoginPage() {
  return (
    <Flex flex='1' direction='column' alignItems='center' gap={6}>
      <AuthForm action={login} method='Log in' />
      <Box>
        <Link href='/signup' color='gray' className='hover:!no-underline'>
          Don't have an account?
        </Link>
      </Box>
    </Flex>
  );
}
