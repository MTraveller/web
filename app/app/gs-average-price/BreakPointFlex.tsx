'use client';

import { Flex, useBreakpoint } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const BreakPointFlex = ({ children }: PropsWithChildren) => {
  const breakPoint = useBreakpoint({ ssr: false });
  return breakPoint === 'base' ? (
    <Flex flexDir='column' gap={6}>
      {children}
    </Flex>
  ) : (
    <Flex
      pos='sticky'
      top='40px'
      flexBasis='auto'
      flex='2'
      flexDir='column'
      gap={6}
    >
      {children}
    </Flex>
  );
};

export default BreakPointFlex;
