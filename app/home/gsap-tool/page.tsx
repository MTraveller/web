import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';

export default async function Home() {
  return (
    <>
      <Heading as='h1' fontWeight='800' textColor='whiteAlpha.800'>
        GS Average Price Tool: Key to Competitive Pricing
      </Heading>
      <Flex flexDirection='column' gap={6}>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          The GS Average Price tool, is designed to take the guesswork out of
          pricing your products and help you stay ahead of the competition in
          the fast-paced world of e-commerce.
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          At eCom in Motion, we know that pricing can make or break your
          business, which is why we created GS Average Price tool—to provide you
          with accurate, real-time data that allows you to set the perfect price
          every time.
        </Text>
      </Flex>
      <Heading as='h2' fontSize='3xl' textColor='whiteAlpha.800'>
        What is the GS Average Price tool?
      </Heading>
      <Flex flexDirection='column' gap={6}>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          GS Average Price tool is an innovative tool that crawls Google
          Shopping to calculate the average price of any given product. By
          analyzing current market data from one of the largest online
          marketplaces, GS Average Price tool offers you an up-to-date snapshot
          of what consumers are paying for similar products.
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          This insight empowers you to set competitive prices that attract
          customers while maximizing your profit margins.
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          Whether you&apos;re a seasoned dropshipper or just starting out, GS
          Average Price tool is your go-to resource for pricing strategies that
          work. With just a few clicks, you can access critical pricing
          information that would otherwise take hours of manual research to
          compile.
        </Text>
      </Flex>
      <Heading as='h2' fontSize='3xl' textColor='whiteAlpha.800'>
        Why GS Average Price tool is Essential for Your Business
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        In the crowded e-commerce landscape, pricing your products correctly is
        crucial to your success. Too high, and you risk driving customers away;
        too low, and you might undermine your profitability. GS Average Price
        helps you strike the perfect balance by providing reliable, data-driven
        insights.
      </Text>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        Here&apos;s how GS Average Price transforms your approach to pricing:
      </Text>
      <OrderedList fontSize='lg' textColor='whiteAlpha.700'>
        <ListItem mb={6}>
          <b>Real-Time Market Data:</b> The e-commerce market is constantly
          evolving, with prices fluctuating based on demand, seasonality, and
          competition. GS Average Price keeps you informed with real-time data,
          so you can adjust your pricing strategy to reflect current market
          conditions. This ensures that your prices are always competitive, no
          matter how quickly the market shifts.
        </ListItem>
        <ListItem mb={6}>
          <b>Competitive Edge:</b> Understanding what others in your niche are
          charging gives you a significant advantage. With GS Average Price, you
          can easily benchmark your prices against those of your competitors,
          helping you position your products strategically. Whether you choose
          to match, undercut, or premium-price your products, you&apos;ll have
          the data you need to make informed decisions.
        </ListItem>
        <ListItem mb={6}>
          <b>Maximizing Profit Margins:</b> Setting the right price isn&apos;t
          just about staying competitive; it&apos;s also about ensuring your
          business is profitable. GS Average Price helps you find the sweet spot
          where your products are priced attractively for customers while still
          leaving you with healthy profit margins. This balance is key to
          sustaining and growing your business over time.
        </ListItem>
        <ListItem>
          <b>Simplified Pricing Strategy:</b> Pricing research can be a daunting
          task, especially when you&apos;re managing multiple products or
          launching a new store. GS Average Price simplifies this process by
          delivering all the information you need in one place. You can quickly
          compare prices, identify trends, and set your pricing strategy without
          the usual hassle and stress.
        </ListItem>
      </OrderedList>
      <Heading as='h3' fontSize='xl' textColor='whiteAlpha.800'>
        Why eCom in Motion?
      </Heading>
      <Flex flexDirection='column' gap={6}>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          At eCom in Motion, we&apos;re committed to helping you make smarter,
          faster decisions that drive your business forward. GS Average Price is
          a key part of that mission, offering you the tools you need to thrive
          in today&apos;s dynamic e-commerce environment.
        </Text>
        <Text fontSize='lg' textColor='whiteAlpha.700'>
          Discover the power of GS Average Price today, and take control of your
          pricing strategy like never before!
        </Text>
      </Flex>
    </>
  );
}
