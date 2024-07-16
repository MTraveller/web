'use client';

import { Flex, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import AuthForm from '../../auth/form/AuthForm';
import { signup } from './actions';

export default function LoginPage() {
  return (
    <Flex flex='1' direction='column' alignItems='center' gap={6}>
      <AuthForm action={signup} method='Sign up' />
      <Box>
        <Link href='/login' color='gray' className='hover:!no-underline'>
          Already have an account?
        </Link>
      </Box>
    </Flex>
  );
}
