import { getSupaUserWithRedirect } from '@/utils/supabase/getUser';
import { Text } from '@chakra-ui/react';

export default async function GSAPPage() {
  const { data } = await getSupaUserWithRedirect();

  return (
    <Text fontSize='xl' fontWeight='800' fontStyle='italic'>
      Google Shopping Average Price
    </Text>
  );
}
