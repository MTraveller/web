import getDomain from '@/utils/getDomain';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { ChakraLink } from './ChakraLink';

const PrivacyTermsLinks = ({ handleClick }: { handleClick?: () => void }) => {
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
        <ChakraLink
          href={`${www}/privacy`}
          label='Privacy'
          onClick={handleClick}
        />
      </ListItem>
      <ListItem>
        <ChakraLink href={`${www}/terms`} label='Terms' onClick={handleClick} />
      </ListItem>
    </UnorderedList>
  );
};

export default PrivacyTermsLinks;
