'use client';

import getDomain from '@/utils/getDomain';
import { Link } from '@chakra-ui/next-js';
import { ListItem, UnorderedList } from '@chakra-ui/react';

const PrivacyTermsLinks = () => {
  const {
    domain: { www },
  } = getDomain();

  return (
    <UnorderedList
      display='flex'
      flexDir='row'
      fontSize='xs'
      className='w-28'
      listStyleType='none'
      justifyContent='space-between'
      color='GrayText'
    >
      <ListItem>
        <Link href={`${www}/privacy`} _hover={{ textDecoration: 'none' }}>
          Privacy
        </Link>
      </ListItem>
      <ListItem>
        <Link href={`${www}/terms`} _hover={{ textDecoration: 'none' }}>
          Terms
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default PrivacyTermsLinks;
