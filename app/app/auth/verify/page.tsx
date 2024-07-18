import getDomain from '@/utils/getDomain';
import { Center, Text } from '@chakra-ui/react';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

function VerifyPage() {
  const referer = headers().get('referer');
  const {
    domain: { app },
  } = getDomain();

  if (referer !== `${app}/login`) redirect('/');

  return (
    <Center>
      <Text fontStyle='italic' fontSize='xl' textAlign='center'>
        Please click the verifiction link
        <br />
        in the email sent to you, to continue!
      </Text>
    </Center>
  );
}

export default VerifyPage;
