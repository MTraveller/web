import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { ChakraLinkWithChildren } from '../components/ChakraLinkWithChildren';

export default function AppCards() {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Tools</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <ChakraLinkWithChildren href='/niche-ai' hover={true}>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Niche AI Tool
              </Heading>
              <Text pt='2' fontSize='sm'>
                Make a niche list using the latest chatGPT tool.
              </Text>
            </Box>
          </ChakraLinkWithChildren>
          <ChakraLinkWithChildren href='/gs-average-price' hover={true}>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                GS Average Price Tool
              </Heading>
              <Text pt='2' fontSize='sm'>
                Extract the average price of keywords from google shopping.
              </Text>
            </Box>
          </ChakraLinkWithChildren>
        </Stack>
      </CardBody>
    </Card>
  );
}
