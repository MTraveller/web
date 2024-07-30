import { getSupaUserWithRedirect } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import { Text } from '@chakra-ui/react';

export default async function GSAPPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await getSupaUserWithRedirect(supabase);

  return (
    <Text fontSize='xl' fontWeight='800' fontStyle='italic'>
      Google Shopping Average Price
    </Text>
  );
}
