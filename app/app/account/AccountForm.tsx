'use client';

import { countryList } from '@/entities/account';
import { createClient } from '@/utils/supabase/client';
import { getUserDetails } from '@/utils/supabase/queries';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SupabaseClient, type User } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import * as z from 'zod';

const schema = z.object({
  first_name: z.string({ required_error: 'Firstname is required' }).min(3),
  last_name: z.string({ required_error: 'Lastname is required' }).min(2),
  address: z.string({ required_error: 'Address is required' }).min(5),
  postal: z.coerce
    .number({ required_error: 'Postal is required' })
    .int()
    .min(2)
    .positive(),
  city: z.string({ required_error: 'City is required' }).min(3),
  country: z.string({ required_error: 'Country is required' }),
});

type Inputs = {
  first_name: string | null;
  last_name: string | null;
  address: string | null;
  postal: number | null;
  city: string | null;
  country: string | null;
};

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const [loading, setLoading] = useState(true);
  const [credit, setCredit] = useState(null);

  const getProfile = useCallback(
    async (supabase: SupabaseClient) => {
      try {
        setLoading(true);

        const { data, error, status } = await getUserDetails(supabase);
        console.log(data, error, status);

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          const { first_name, last_name, available_credit, billing_address } =
            data;
          setValue('first_name', first_name, { shouldValidate: true });
          setValue('last_name', last_name, { shouldValidate: true });
          setCredit(available_credit);

          if (billing_address) {
            const {
              address,
              postal,
              city,
              country,
            }: {
              address: string;
              postal: number;
              city: string;
              country: string;
            } = JSON.parse(billing_address);

            setValue('address', address, { shouldValidate: true });
            setValue('postal', postal, { shouldValidate: true });
            setValue('city', city, { shouldValidate: true });
            setValue('country', country, { shouldValidate: true });
          }
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
    },
    [user, setValue, toast]
  );

  useEffect(() => {
    getProfile(supabase);
  }, [user, getProfile, supabase]);

  const onSubmit = async ({
    first_name,
    last_name,
    address,
    postal,
    city,
    country,
  }: {
    first_name: string | null;
    last_name: string | null;
    address: string | null;
    postal: number | null;
    city: string | null;
    country: string | null;
  }) => {
    try {
      setLoading(true);

      const { error } = await supabase.from('users').upsert({
        id: user?.id as string,
        updated_at: new Date().toISOString(),
        first_name,
        last_name,
        billing_address: JSON.stringify({
          address,
          postal,
          city,
          country,
        }),
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
          <Text flexBasis='50%' mb='0' fontWeight='500'>
            Available Credit:
          </Text>
          <Flex width='50%' justifyContent='space-between' alignItems='center'>
            <Text pl={5}>${credit ? credit : 0}</Text>
            <Button colorScheme='green'>+</Button>
          </Flex>
        </FormControl>
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
        <FormControl display='flex' alignItems='center' isRequired>
          <FormLabel flexBasis='50%' mb={4}>
            Address:
          </FormLabel>
          <Box flexBasis='50%'>
            <Input type='text' {...register('address', { required: true })} />
            <FormHelperText
              mt={1}
              pl={4}
              fontSize='xs'
              fontStyle='italic'
              color='pink.500'
              minHeight={4}
            >
              {errors.address && errors.address.message}
            </FormHelperText>
          </Box>
        </FormControl>
        <FormControl display='flex' alignItems='center'>
          <FormLabel flexBasis='50%' mb={4}>
            Postal:
          </FormLabel>
          <Box flexBasis='50%'>
            <Input type='number' {...register('postal', { required: true })} />
            <FormHelperText
              mt={1}
              pl={4}
              fontSize='xs'
              fontStyle='italic'
              color='pink.500'
              minHeight={4}
            >
              {errors.postal && errors.postal.message}
            </FormHelperText>
          </Box>
        </FormControl>
        <FormControl display='flex' alignItems='center' isRequired>
          <FormLabel flexBasis='50%' mb={4}>
            City:
          </FormLabel>
          <Box flexBasis='50%'>
            <Input type='text' {...register('city', { required: true })} />
            <FormHelperText
              mt={1}
              pl={4}
              fontSize='xs'
              fontStyle='italic'
              color='pink.500'
              minHeight={4}
            >
              {errors.city && errors.city.message}
            </FormHelperText>
          </Box>
        </FormControl>
        <FormControl display='flex' alignItems='center' isRequired>
          <FormLabel flexBasis='50%' mb={4}>
            Country:
          </FormLabel>
          <Box flexBasis='50%'>
            <Select
              placeholder='Select Country'
              {...register('country', { required: true })}
            >
              {countryList.map((country) => {
                return (
                  <option key={country} value={country}>
                    {country}
                  </option>
                );
              })}
            </Select>
            <FormHelperText
              mt={1}
              pl={4}
              fontSize='xs'
              fontStyle='italic'
              color='pink.500'
              minHeight={4}
            >
              {errors.country && errors.country.message}
            </FormHelperText>
          </Box>
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
