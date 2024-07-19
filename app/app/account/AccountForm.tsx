'use client';

import { createClient } from '@/utils/supabase/client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type User } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import * as z from 'zod';

const schema = z.object({
  first_name: z.string({ required_error: 'Firstname is required' }).min(3),
  last_name: z.string({ required_error: 'Lastname is required' }).min(2),
});

type Inputs = {
  first_name: string | null;
  last_name: string | null;
  credit: number | null;
};

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const [loading, setLoading] = useState(true);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`first_name, last_name, credit`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setValue('first_name', data.first_name, { shouldValidate: true });
        setValue('last_name', data.last_name, { shouldValidate: true });
        setValue('credit', data.credit, { shouldValidate: false });
      }
    } catch (error) {
      toast({
        title: 'Error loading user data!',
        description: 'There was an error processing your profile.',
        status: 'error',
        position: 'bottom-right',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }, [user, supabase, setValue, toast]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  const onSubmit = async ({
    first_name,
    last_name,
  }: {
    first_name: string | null;
    last_name: string | null;
  }) => {
    try {
      setLoading(true);
      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        first_name,
        last_name,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast({
        title: 'Profile updated!',
        description: 'The updates were successfully saved.',
        status: 'success',
        position: 'bottom-right',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Profile update error!',
        description: 'Error updating the data.',
        status: 'error',
        position: 'bottom-right',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex className='form-widget' minW='80%'>
      <form
        className='flex flex-1 flex-col gap-8'
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl display='flex' alignItems='center'>
          <FormLabel flexBasis='50%' mb='0'>
            Email:
          </FormLabel>
          <Box flexBasis='50%'>
            <Input type='text' value={user?.email} disabled />
            <FormHelperText
              mt={1}
              pl={4}
              opacity='0.6'
              fontSize='xs'
              fontStyle='italic'
            >
              Contact support to change your email.
            </FormHelperText>
          </Box>
        </FormControl>
        <FormControl display='flex' alignItems='center' isRequired>
          <FormLabel flexBasis='50%' mb={4}>
            First Name:
          </FormLabel>
          <Box flexBasis='50%'>
            <Input
              type='text'
              flexBasis='50%'
              {...register('first_name', { required: true })}
            />
            <FormHelperText
              mt={1}
              pl={4}
              fontSize='xs'
              fontStyle='italic'
              color='pink.500'
              minHeight={4}
            >
              {errors.first_name && errors.first_name.message}
            </FormHelperText>
          </Box>
        </FormControl>
        <FormControl display='flex' alignItems='center' isRequired>
          <FormLabel flexBasis='50%' mb={4}>
            Last Name:
          </FormLabel>
          <Box flexBasis='50%'>
            <Input type='text' {...register('last_name', { required: true })} />
            <FormHelperText
              mt={1}
              pl={4}
              fontSize='xs'
              fontStyle='italic'
              color='pink.500'
              minHeight={4}
            >
              {errors.last_name && errors.last_name.message}
            </FormHelperText>
          </Box>
        </FormControl>
        <FormControl display='flex' alignItems='center'>
          <Text flexBasis='50%' mb='0' fontWeight='500'>
            Available Credit:
          </Text>
          <Flex width='50%' justifyContent='space-between' alignItems='center'>
            <Text pl={5}>${getValues('credit') ? getValues('credit') : 0}</Text>
            <Button colorScheme='green'>+</Button>
          </Flex>
        </FormControl>
        <Button
          type='submit'
          colorScheme='blue'
          spinner={<BeatLoader size={8} color='white' />}
          disabled={loading}
          isLoading={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </Button>
      </form>
    </Flex>
  );
}
