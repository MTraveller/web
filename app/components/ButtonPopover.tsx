import {
  PlacementWithLogical,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
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
  path: string;
  pathText: string;
}

function ButtonPopover({
  placement,
  isOpen,
  onClose,
  button,
  header,
  body,
  path,
  pathText,
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
          {body} <ChakraLink href={path} label={pathText} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default ButtonPopover;
