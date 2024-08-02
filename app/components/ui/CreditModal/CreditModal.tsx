'use client';

import StripeForm from '@/app/app/account/stripe/StripeForm';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

const CreditModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme='green' onClick={onOpen}>
        +
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay bg='blackAlpha.500' backdropFilter='blur(10px)' />
        <ModalContent>
          <ModalHeader>Purchase Credits</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StripeForm />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='green'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreditModal;
