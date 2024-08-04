import { Box, Heading } from '@chakra-ui/react';

export default async function GSAPPage() {
  return (
    <>
      <Box>
        <Heading as='h1' fontWeight='800'>
          GS Average Price Tool
        </Heading>
        <Heading as='h2' fontWeight='400' fontSize='lg'>
          Grab The Average Price of Any Product, Using Google Shopping.
        </Heading>
      </Box>
    </>
  );
}
