import { Box, Heading } from '@chakra-ui/react';
import AccountForm from './AccountForm';

export default async function Account() {
  return (
    <>
      <Box>
        <Heading as='h1' fontWeight='800'>
          Account
        </Heading>
        <Heading as='h2' fontWeight='400' fontSize='lg'>
          Manage Your Information.
        </Heading>
      </Box>
      <AccountForm />
    </>
  );
}
