import { Center, Text } from '@chakra-ui/react';

function VerifyPage() {
  return (
    <Center>
      <Text fontStyle='italic' fontSize='xl' textAlign='center'>
        Please click the verifiction link
        <br />
        in the email just sent to you, to continue!
      </Text>
    </Center>
  );
}

export default VerifyPage;
