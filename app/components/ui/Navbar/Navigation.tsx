import { VStack } from '@chakra-ui/react';
import AuthNav from './AuthNav';
import UnAuthNav from './UnAuthNav';

const Navigation = ({ user }: { user: string | null | undefined }) => {
  return (
    <VStack w='full' spacing={6} fontSize='large'>
      {user ? <AuthNav /> : <UnAuthNav />}
    </VStack>
  );
};

export default Navigation;
