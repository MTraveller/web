import {
  PlacementWithLogical,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { ChakraLink } from './ChakraLink';

interface PopoverProps {
  placement: PlacementWithLogical;
  isOpen: boolean;
  onClose: () => void;
  button: JSX.Element;
  header: string;
  body: string;
  href: string;
  label: string;
}

function ButtonPopover({
  placement,
  isOpen,
  onClose,
  button,
  header,
  body,
  href,
  label,
}: PopoverProps) {
  return (
    <Popover isLazy placement={placement} isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>{button}</PopoverTrigger>
      <PopoverContent p={2} color='whiteAlpha.700' bg='black' border='0'>
        <PopoverArrow bgColor='black' />
        <PopoverHeader pt={2} fontWeight='bold' border='0'>
          {header}
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody pt={0}>
          {body}{' '}
          <ChakraLink href={href} label={label} color='blue.500' hover={true} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default ButtonPopover;
