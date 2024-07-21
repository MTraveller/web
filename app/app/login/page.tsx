import { fetchSupaUserWOR } from '@/services/user-client';
import { Box, Flex, Text } from '@chakra-ui/react';
import { redirect } from 'next/navigation';
import AuthForm from '../auth/form/AuthForm';
import { login } from './actions';

export default async function LoginPage() {
  const user = await fetchSupaUserWOR().then((r) => r?.user);
  if (user) redirect('../welcome');

  return (
    <Flex flex='1' direction='column' alignItems='center' gap={6}>
      <AuthForm action={login} />
      <Box>
        <Text fontSize='sm' color='gray'>
          Don't have an account?
          <br /> No worries, an account will automatically be created for you.
        </Text>
      </Box>
    </Flex>
  );
}
