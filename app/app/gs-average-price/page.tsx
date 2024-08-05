'use client';

import { useBreakpoint } from '@/app/hooks/useBreakpoint';
import useGetProductPrice from '@/app/hooks/useGetProductPrice';
import { queryClient } from '@/app/providers';
import useGSAPStore from '@/app/stores/gsapStore';
import { AvgPrices, ProductData } from '@/entities/gsap';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Divider,
  Flex,
  Heading,
  Progress,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import BreakPointFlex from './BreakPointFlex';
import GSAPForm from './form/GSAPForm';
import { useStore } from '@/app/stores/userStore';
import { useUserDetailsStore } from '@/app/stores/userStore';

export default function GSAPPage() {
  const breakPoint = useBreakpoint();
  const credit = useStore(
    useUserDetailsStore,
    (state) => state.available_credit
  );
  const { setForm, form } = useGSAPStore();
  const result = useGetProductPrice() as ProductData[];
  const [avgPrices, setPrices] = useState<AvgPrices[]>([]);
  const [isDone, setDone] = useState(false);

  result?.map(({ data }) => {
    const obj = data?.find(Boolean);

    if (obj && !avgPrices.includes(obj))
      setPrices((avgPrices) => [...avgPrices, obj]);

    if (avgPrices.length === result.length && isDone) {
      setDone(false);
    } else if (avgPrices.length !== result.length && !isDone) {
      setDone(true);
    }
  });

  const doSubmit = (formData: string) => {
    queryClient.clear();
    setForm(null);
    setPrices([]);

    if (credit) {
      setForm(formData);
    } else {
      throw new Error('Low Credit');
    }
  };

  return (
    <>
      <Box>
        <Heading as='h1' fontWeight='700'>
          GS Average Price Tool
        </Heading>
        <Heading as='h2' fontWeight='400' fontSize='lg'>
          Grab The Average Price of Any Product, Using Google Shopping.
        </Heading>
      </Box>
      {breakPoint && (
        <Flex
          flexDir={['base', 'sm'].includes(breakPoint) ? 'column' : 'row'}
          gap={16}
        >
          <BreakPointFlex>
            <GSAPForm doSubmit={doSubmit} loading={isDone} />
          </BreakPointFlex>
          <Box flex='2' mt='2px'>
            {isDone && <Progress size='sm' mt='12px' mb={4} isIndeterminate />}
            {!!avgPrices?.length && (
              <>
                <Flex px={4} py={1} justifyContent='space-between'>
                  <Heading
                    as='h4'
                    fontSize='xs'
                    lineHeight={2}
                    color='gray.400'
                    fontWeight='700'
                    letterSpacing='wider'
                    textTransform='uppercase'
                  >
                    Keyword
                  </Heading>
                  <Heading
                    as='h4'
                    fontSize='xs'
                    lineHeight={2}
                    color='gray.400'
                    fontWeight='700'
                    letterSpacing='wider'
                    textTransform='uppercase'
                  >
                    Avg Price
                  </Heading>
                </Flex>
                <Divider />

                {avgPrices?.map(({ keyword, currency, avgPrice, error }, i) => {
                  return (
                    <Box key={`box-${keyword}`}>
                      <Flex
                        id={keyword.replaceAll(' ', '_')}
                        justifyContent='space-between'
                        alignItems='center'
                        gap={8}
                        px={4}
                        py={2}
                      >
                        <Text flex={1}>{keyword}</Text>
                        <Text>
                          {error ? (
                            <Tooltip
                              px={6}
                              bgColor='gray.700'
                              closeOnClick={false}
                              borderRadius='md'
                              placement='top-start'
                              color='whiteAlpha.700'
                              label={
                                <span>
                                  Credit has not been deducted for
                                  <br />
                                  {keyword}
                                </span>
                              }
                              aria-label='Keyword Error'
                            >
                              <Alert
                                status='warning'
                                borderRadius='md'
                                py={1}
                                whiteSpace='nowrap'
                                _hover={{ cursor: 'pointer' }}
                              >
                                <AlertIcon />
                                <Box display='flex' flexDirection='column'>
                                  <AlertTitle fontSize='xs' lineHeight={1.2}>
                                    Credit isn't deducted.
                                  </AlertTitle>
                                  <AlertDescription
                                    fontSize='x-small'
                                    lineHeight={1.2}
                                  >
                                    {error}
                                  </AlertDescription>
                                </Box>
                              </Alert>
                            </Tooltip>
                          ) : avgPrice ? (
                            ['$', '€', '£'].includes(currency) ? (
                              `${currency}${avgPrice}`
                            ) : (
                              `${avgPrice} ${currency}`
                            )
                          ) : (
                            <Tooltip
                              px={6}
                              bgColor='gray.700'
                              closeOnClick={false}
                              borderRadius='md'
                              placement='top-start'
                              color='whiteAlpha.700'
                              label={
                                <span>
                                  Credit has not been deducted for
                                  <br />
                                  {keyword}
                                </span>
                              }
                              aria-label='Keyword Error'
                            >
                              <Alert
                                status='info'
                                borderRadius='md'
                                py={1}
                                whiteSpace='nowrap'
                                _hover={{ cursor: 'pointer' }}
                              >
                                <AlertIcon />
                                <Box display='flex' flexDirection='column'>
                                  <AlertTitle fontSize='xs' lineHeight={1.2}>
                                    No Search Result!
                                  </AlertTitle>
                                  <AlertDescription
                                    fontSize='x-small'
                                    lineHeight={1.2}
                                  >
                                    Credit isn't deducted.
                                  </AlertDescription>
                                </Box>
                              </Alert>
                            </Tooltip>
                          )}
                        </Text>
                      </Flex>
                      <Divider />
                    </Box>
                  );
                })}
              </>
            )}
          </Box>
        </Flex>
      )}
    </>
  );
}
