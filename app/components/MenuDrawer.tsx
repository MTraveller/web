'use client';

import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { TbSquareRoundedArrowDown } from 'react-icons/tb';
import useMenuStore from '../stores/menuStore';
import Logo from './Logo';
import Navigation from './navs/Navigation';

const MenuDrawer = () => {
  const { isOpen, onClose } = useDisclosure();
  const { menuIsOpen, setOpen } = useMenuStore();

  const [showDownIcon, setDownIcon] = useState(true);

  const menu = useRef(null);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen, setOpen]);

  const handleDownIcon = () => {
    if (menu.current) {
      const divMenu: HTMLDivElement = menu.current;

      const isScrollHeightGreater = divMenu.clientHeight < divMenu.scrollHeight;

      if (isScrollHeightGreater) {
        setDownIcon(false);

        divMenu.addEventListener('scroll', () => {
          if (
            divMenu.clientHeight + divMenu.scrollTop ===
            divMenu.scrollHeight
          ) {
            setDownIcon(true);
          } else {
            setDownIcon(false);
          }
        });
      }
    }
  };

  return (
    <>
      <Button
        w='60px'
        h='50px'
        border='1px'
        bgColor='transparent'
        onClick={() => setOpen(true)}
      >
        <Icon as={HiOutlineMenuAlt4} fontSize='lg' />
      </Button>
      <Modal
        motionPreset='none'
        scrollBehavior='inside'
        onClose={onClose}
        isOpen={menuIsOpen}
        size='full'
      >
        <ModalOverlay
          onViewportEnter={handleDownIcon}
          onViewportLeave={() => setDownIcon(true)}
        />
        <ModalContent>
          <ModalHeader
            minH='80px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            px={4}
            py={0}
          >
            <Logo />
            <Button
              w='60px'
              h='50px'
              border='1px'
              bgColor='transparent'
              onClick={() => setOpen(false)}
            >
              <Icon as={HiOutlineX} fontSize='lg' />
            </Button>
          </ModalHeader>
          <ModalBody ref={menu} display='flex' my={6}>
            <Navigation />
            <Icon
              as={TbSquareRoundedArrowDown}
              pos='absolute'
              bottom={1}
              right={4}
              display={showDownIcon ? 'none' : 'inline-block'}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuDrawer;
