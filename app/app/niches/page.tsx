import { getSupaUserWithRedirect } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import { Box, Heading, Text } from '@chakra-ui/react';

export default async function NichesPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await getSupaUserWithRedirect(supabase);

  return (
    <Box>
      <Heading fontSize='xl' fontWeight='800' fontStyle='italic'>
        Niches
      </Heading>
      <Text></Text>
    </Box>
  );
}
