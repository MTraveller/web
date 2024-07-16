import { Box, Flex, Text } from '@chakra-ui/react';
import AuthForm from '../auth/form/AuthForm';
import { login } from './actions';

export default function LoginPage() {
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
