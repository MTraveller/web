'use client';

import {
  Button,
  ButtonGroup,
  Fade,
  FormControl,
  FormHelperText,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DataKeywords, FormData, FormProps } from '@/entities/gsap';
import useSubmitDisclosure from '@/app/hooks/useSubmitDisclosure';
import useGSAPStore from '@/app/stores/gsapStore';
import AutoComplete from './AutoComplete';
import ButtonPopover from '@/app/components/ButtonPopover';
import isPrevious from './isPrevious';

export default function GSAPForm({ doSubmit, loading }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      keywords: '',
      country: '',
      countryCode: 'US',
      currency: '$',
    },
  });

  const { ref, ...rest } = register('country');

  const { form } = useGSAPStore();
  const [isFormSame, setIsFormSame] = useState(false);

  const useSubmitButton = useSubmitDisclosure();
  const watchCountry = watch('country');

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const keywords = data.keywords
      .split('\n')
      .map((keyword) => keyword.split(' ').filter(Boolean).join(' '))
      .map((keyword) => keyword.replaceAll(' ', '+').toLowerCase());

    const dataKeywords: DataKeywords = {
      country: data.country,
      countryCode: data.countryCode,
      currency: data.currency,
      keywords: [],
    };

    keywords.map((keyword) => dataKeywords.keywords.push(keyword));

    doSubmit(JSON.stringify(dataKeywords));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl display='flex' flexDir='column' gap={6}>
        <FormHelperText fontStyle='italic' mb={-5} p={0}>
          Separate each keyword with a new line as shown in the box.
        </FormHelperText>
        <Textarea
          rows={12}
          placeholder={`Keyword 1\nKeyword 2\netc...`}
          {...register('keywords', { required: true })}
          borderColor={errors.keywords && 'red.500'}
          focusBorderColor={errors.keywords && 'red.500'}
          autoFocus={errors.keywords && true}
          px={4}
        />
        <FormHelperText fontStyle='italic' mb={-5} p={0}>
          <Text>Default market is United States.</Text>
        </FormHelperText>
        <AutoComplete
          inputRef={ref}
          change={watchCountry}
          setValue={setValue}
          rest={rest}
        />
        <Fade
          in={!useSubmitButton.isOpen}
          hidden={!useSubmitButton.isOpen ? false : true}
        >
          <ButtonPopover
            placement='top'
            isOpen={isFormSame}
            onClose={() => setIsFormSame(false)}
            button={
              <Button
                w='full'
                colorScheme='blue'
                isLoading={loading}
                loadingText='Loading'
                spinnerPlacement='start'
                onClick={() =>
                  isPrevious(getValues(), setIsFormSame, useSubmitButton, form)
                }
                isDisabled={!isValid}
              >
                Get Average Price
              </Button>
            }
            header='No change detected!'
            body={`
              To view previous submissions, please refer to 
            `}
            path='previous'
            pathText='previous prices page'
          />
        </Fade>
        <Fade
          in={useSubmitButton.isOpen}
          hidden={useSubmitButton.isOpen ? false : true}
        >
          <ButtonGroup w='full' spacing='6'>
            <Button
              type='submit'
              w='50%'
              colorScheme='green'
              onClick={() => !errors.keywords && useSubmitButton.onToggle()}
              isDisabled={errors.keywords ? true : false}
            >
              Confirm
            </Button>
            <Button
              w='50%'
              onClick={() => useSubmitButton.onToggle()}
              variant='outline'
              colorScheme='red'
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Fade>
      </FormControl>
    </form>
  );
}
