import getSupaUser from '@/utils/supabase/getUser';
import { Text } from '@chakra-ui/react';

export default async function GSAPPage() {
  const { data } = await getSupaUser();

  return (
    <Text fontSize='8xl' fontWeight='800' fontStyle='italic'>
      Google Shopping Average Price
    </Text>
  );
}
