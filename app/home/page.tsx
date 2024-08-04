import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default async function Home() {
  return (
    <Flex flexDirection='column' gap={16}>
      <Heading
        as='h1'
        fontSize='6xl'
        fontWeight='800'
        fontStyle='italic'
        textAlign='center'
        textColor='whiteAlpha.800'
      >
        eCom in Motion
        <br />A Dropshipper&apos;s Companion
      </Heading>
      <Flex flexDirection='column' gap={6}>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          Are you ready to take your dropshipping business to the next level?
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          Imagine having access to powerful tools that make market research a
          breeze, giving you the insights you need to make smarter decisions and
          increase your profits. Look no further—eCom in Motion has you covered!
        </Text>
      </Flex>
      <Heading as='h2' fontSize='3xl' textColor='whiteAlpha.800'>
        Niche AI Tool
      </Heading>
      <Flex flexDirection='column' gap={6}>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          Let us do the heavy lifting for you!
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          With our cutting-edge Niche AI tool, powered by ChatGPT, you can
          generate a list of 50 high-ticket product ideas tailored to your
          niche. Whether you're just starting or looking to diversify your
          offerings, this tool provides you with a curated selection of products
          that have high demand and substantial profit margins.
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          Stop wasting hours on manual research—let us show you the
          money-makers!
        </Text>
      </Flex>
      <Heading as='h2' fontSize='3xl' textColor='whiteAlpha.800'>
        GS Average Price Tool
      </Heading>
      <Flex flexDirection='column' gap={6}>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          Once you&apos;ve got your product ideas, the next step is crucial:
          understanding the market price. Our Google shopping average price tool
          dives deep into Google Shopping to crawl through all the prices for
          your chosen products, calculating the average price across the board.
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          This means you&apos;ll know exactly what customers are paying and can
          position your prices competitively. With Google shopping average price
          tool, you&apos;ll quickly identify which products are worth pursuing,
          eliminating the guesswork and ensuring that every product you choose
          is a winner.
        </Text>
      </Flex>
      <Heading as='h3' fontSize='xl' textColor='whiteAlpha.800'>
        Why eCom in Motion?
      </Heading>
      <Flex flexDirection='column' gap={6}>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          At eCom in Motion, we understand the challenges of dropshipping
          because we&apos;re dropshipper&apos;s ourselves. That&apos;s why
          we&apos;ve designed these tools with one goal in mind: to make life
          easier and business more profitable.
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          By leveraging our Niche AI and GS Average Price tools, you&apos;ll be
          equipped with the knowledge to make informed decisions, save time, and
          ultimately, maximize your returns.
        </Text>
      </Flex>
    </Flex>
  );
}
