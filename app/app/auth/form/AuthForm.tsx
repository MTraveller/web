'use client';

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import * as z from 'zod';
import { OAuthButtons } from '../../login/oauth-login';

const schema = z.object({
  email: z.string().email(),
});

interface AuthForm {
  action: (formData: FormData) => Promise<void>;
}

type Inputs = {
  email: string;
};

const AuthForm = ({ action }: AuthForm) => {
  const [isLoading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = () => {
    setLoading(true);
    formRef.current?.submit();
  };

  return (
    <form
      className='w-full'
      action={action}
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
    >
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
        <Heading as='h2' size='sm' mb={6}>
          Continue with your preferred method
        </Heading>
        <HStack>
          <OAuthButtons />
        </HStack>
        <Center height={4}>
          <Divider />
        </Center>
        <Stack direction={['column']} textAlign='left' gap={3}>
          <label htmlFor='email' hidden>
            Email:
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email..'
            className='px-6 py-3'
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className='text-pink-600'>
              A valid <b>email address</b> is required
            </span>
          )}
        </Stack>
        <Box>
          <Button
            type='submit'
            className='w-full'
            colorScheme='green'
            spinner={<BeatLoader size={8} color='white' />}
            isLoading={isLoading}
            disabled={isLoading}
          >
            Continue with email
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default AuthForm;
