'use client';

import { Text } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

const Error = () => {
  const error = useSearchParams().get('e');

  return <Text>{error}</Text>;
};

export default Error;
