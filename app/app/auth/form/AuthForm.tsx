import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import BeatLoader from 'react-spinners/BeatLoader';

interface AuthForm {
  action: (formData: FormData) => Promise<void>;
}

const AuthForm = ({ action }: AuthForm) => {
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
          Log in to your account
        </Heading>
        <Heading as='h2' size='sm'>
          Continue with your preferred method
        </Heading>
        <HStack></HStack>
        <Center height={4}>
          <Divider />
        </Center>
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
        </Stack>
        <Box>
          <Button
            isLoading={false}
            colorScheme='green'
            spinner={<BeatLoader size={8} color='white' />}
            className='w-full'
            type='submit'
          >
            Continue with email
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default AuthForm;