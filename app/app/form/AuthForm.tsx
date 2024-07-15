import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react';
import BeatLoader from 'react-spinners/BeatLoader';

interface AuthForm {
  action: (formData: FormData) => Promise<void>;
  method: string;
}

const AuthForm = ({ action, method }: AuthForm) => {
  return (
    <form className='w-full' action={action}>
      <Container
        display='flex'
        flexDirection='column'
        maxW='lg'
        h='fit-content'
        textAlign='center'
        boxShadow='dark-lg'
        rounded='lg'
        gap={5}
        p={6}
      >
        <Heading as='h1' size='lg'>
          {method === 'Log in'
            ? 'Log in to your account'
            : 'Sign up for an account'}
        </Heading>
        <Heading as='h2' size='sm'>
          Choose your preferred method
        </Heading>
        <Stack direction={['column']} textAlign='left' gap={3}>
          <label htmlFor='email' hidden>
            Email:
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email..'
            className='px-6 py-3'
            required
          />
          <label htmlFor='password' hidden>
            Password:
          </label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Password..'
            className='px-6 py-3'
            required
          />
        </Stack>
        <Box>
          <Button
            isLoading={false}
            colorScheme='green'
            spinner={<BeatLoader size={8} color='white' />}
            className='w-full'
            type='submit'
          >
            {method}
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default AuthForm;
