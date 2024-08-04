import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function ContactPage() {
  return (
    <>
      <Heading as='h1' textColor='whiteAlpha.800'>
        Contact Us
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        Use this form to contact us.
      </Text>
    </>
  );
}
