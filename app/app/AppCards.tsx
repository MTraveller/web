'use client';

import { Link } from '@chakra-ui/next-js';
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

export default function AppCards() {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Tools</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Link href='/niches'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Niche Idea's
              </Heading>
              <Text pt='2' fontSize='sm'>
                Make a niche list using the latest chatGPT tool.
              </Text>
            </Box>
          </Link>
          <Link href='/gsap'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                GSAP
              </Heading>
              <Text pt='2' fontSize='sm'>
                Extract the average price of keywords from google shopping.
              </Text>
            </Box>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
}
