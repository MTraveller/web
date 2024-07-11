import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const PrivacyTermsLinks = () => {
  return (
    <UnorderedList
      w='full'
      display='flex'
      flexDir='row'
      fontSize='2xs'
      listStyleType='none'
      justifyContent='space-around'
    >
      <ListItem>
        <Link href='/privacy'>Privacy</Link>
      </ListItem>
      <ListItem>
        <Link href='/terms'>Terms</Link>
      </ListItem>
    </UnorderedList>
  );
};

export default PrivacyTermsLinks;
