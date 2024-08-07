import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function CreditPage() {
  return (
    <>
      <Box>
        <Heading as='h1' fontWeight='800'>
          Purchase Credits
        </Heading>
        <Heading as='h2' fontWeight='400' fontSize='lg'>
          Please select the amount to continue.
        </Heading>
      </Box>
    </>
  );
}
