'use client';

import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import GSAPForm from './form/GSAPForm';
import useGSAPStore from '@/app/stores/gsapStore';
import { useState } from 'react';
import useGetProductPrice from '@/app/hooks/useGetProductPrice';
import { AvgPrices, ProductData } from '@/entities/gsap';
import BreakPointFlex from './BreakPointFlex';
import { useBreakpoint } from '@/app/hooks/useBreakpoint';
import { BeatLoader } from 'react-spinners';

export default function GSAPPage() {
  const breakPoint = useBreakpoint();
  const { setForm } = useGSAPStore();
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
    setForm(formData);
    setPrices([]);
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

          <TableContainer flex='3'>
            {!!avgPrices?.length && (
              <Table size='sm'>
                <Thead>
                  <Tr>
                    <Th>Keyword</Th>
                    <Th>Avg Price</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {avgPrices?.map(({ keyword, currency, avgPrice }) => {
                    return (
                      <Tr key={keyword}>
                        <Td>{keyword}</Td>
                        <Td>
                          {['$', '€', '£'].includes(currency)
                            ? `${currency}${avgPrice}`
                            : `${avgPrice} ${currency}`}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            )}
          </TableContainer>
        </Flex>
      )}
    </>
  );
}
