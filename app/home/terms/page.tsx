import { ChakraLink } from '@/app/components/ChakraLink';
import { Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export default async function TermsPage() {
  return (
    <>
      <Heading as='h1' textColor='whiteAlpha.800'>
        Terms & Conditions
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        Last Updated: 2024-08-04
      </Text>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        These Terms & Conditions ("Terms") govern your use of the eCom in Motion
        website and services ("we", "us", "our"). By accessing or using our
        services, you agree to be bound by these Terms. If you do not agree to
        these Terms, you should not use our services.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        1. Acceptance of Terms
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        By using our services, you affirm that you are at least 18 years old and
        legally capable of entering into these Terms. If you are using the
        services on behalf of an entity, you represent that you have the
        authority to bind that entity to these Terms.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        2. Services Provided
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        eCom in Motion provides tools to assist dropshippers by generating
        physical product ideas using AI (ChatGPT) and crawling Google Shopping
        to gather and analyze pricing data. The service calculates average
        prices based on the data collected. Our services are intended to support
        your e-commerce business decisions but are not guaranteed to provide
        specific results or outcomes.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        3. Account Registration
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        To access certain features of our services, you may be required to
        create an account. You agree to provide accurate, current, and complete
        information during the registration process and to update such
        information as necessary. You are responsible for safeguarding your
        account credentials and for all activities that occur under your
        account.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        4. Payment and Subscriptions
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        Some features of our services may be offered on a subscription basis or
        require payment. By subscribing or making a purchase, you agree to pay
        the fees associated with your chosen plan. Payment processing is handled
        by Stripe, and you agree to comply with their terms and conditions. All
        fees are non-refundable unless otherwise stated.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        5. Use of Services
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        You agree to use our services in compliance with all applicable laws and
        regulations. You may not use our services to:
      </Text>
      <UnorderedList fontSize='lg' textColor='whiteAlpha.700'>
        <ListItem mb={3}>
          Engage in any illegal or fraudulent activities.
        </ListItem>
        <ListItem mb={3}>
          Interfere with or disrupt the operation of our services.
        </ListItem>
        <ListItem>
          Attempt to gain unauthorized access to any part of our services.
        </ListItem>
      </UnorderedList>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        6. Intellectual Property
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        All content and materials available on our website and through our
        services, including but not limited to text, graphics, logos, and
        software, are the intellectual property of eCom in Motion or its
        licensors. You are granted a limited, non-exclusive, non-transferable
        license to access and use the services for your personal or business
        use. You may not reproduce, distribute, modify, or create derivative
        works from any content provided through our services without our express
        written consent.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        7. Disclaimer of Warranties
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        Our services are provided on an "as is" and "as available" basis. We
        make no warranties, express or implied, regarding the accuracy,
        completeness, reliability, or availability of our services. We do not
        warrant that our services will meet your specific requirements or that
        they will be uninterrupted, error-free, or secure.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        8. Limitation of Liability
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        To the maximum extent permitted by law, eCom in Motion shall not be
        liable for any indirect, incidental, special, or consequential damages,
        including but not limited to loss of profits, data, or business
        opportunities, arising out of or in connection with your use of our
        services.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        9. Indemnification
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        You agree to indemnify, defend, and hold harmless eCom in Motion and its
        officers, directors, employees, and agents from and against any claims,
        liabilities, damages, losses, and expenses, including reasonable
        attorney's fees, arising out of or in any way connected with your use of
        our services or your violation of these Terms.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        10. Modifications to Services and Terms
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        We reserve the right to modify or discontinue our services at any time,
        with or without notice. We may also update these Terms from time to
        time. Your continued use of our services after any changes to the Terms
        constitutes your acceptance of the revised Terms.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        11. Termination
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        We may terminate or suspend your access to our services, without prior
        notice or liability, for any reason, including if you breach these
        Terms. Upon termination, your right to use the services will immediately
        cease, and any accrued rights or obligations will survive termination.
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        12. Governing Law
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        These Terms shall be governed and construed in accordance with the laws
        of [European Union], without regard to its conflict of law provisions.
        Any disputes arising from or relating to these Terms or your use of our
        services shall be resolved in the courts located in [European Union].
      </Text>
      <Heading
        as='h2'
        fontSize='lg'
        textColor='whiteAlpha.800'
        fontWeight='600'
      >
        13. Contact Information
      </Heading>
      <Text fontSize='lg' textColor='whiteAlpha.700'>
        If you have any questions about these Terms, please contact us at:
      </Text>
      <UnorderedList fontSize='lg' textColor='whiteAlpha.700'>
        <ListItem>
          <b>Email:</b>{' '}
          <ChakraLink
            href='/contact'
            label='Contact us'
            color='blue.500'
            hover={true}
          />
        </ListItem>
      </UnorderedList>
    </>
  );
}
