import { Flex } from '@chakra-ui/react';
import AppCards from './AppCards';
import AppHeading from './AppHeading';

export default async function App() {
  return (
    <Flex direction='column' gap={8}>
      <AppHeading />
      <AppCards />
    </Flex>
  );
}
