'use client';

import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Suspense, useEffect, useRef, useState } from 'react';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { TbSquareRoundedArrowDown } from 'react-icons/tb';
import useMenuStore from '../../../stores/menuStore';
import Logout from '../../Logout';
import PrivacyTermsLinks from '../../PrivacyTermsLinks';
import { Domain } from '../Header/Header';
import Logo from '../Header/Logo';
import Navigation from './Navigation';

const MenuDrawer = ({
  domain,
  user,
}: {
  domain: Domain;
  user: string | null | undefined;
}) => {
  const { isOpen, onClose } = useDisclosure();
  const { menuIsOpen, setOpen } = useMenuStore();

  const [showDownIcon, setDownIcon] = useState(true);

  const menu = useRef(null);

  // useEffect(() => {
  //   setOpen(isOpen);
  // }, [isOpen, setOpen]);

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

  const handleClick = () => {
    console.log('isOpen', isOpen);
    console.log('menuIsOpen', menuIsOpen);
    console.log('setOpen', !!isOpen);
    setOpen(!!isOpen);
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
            <Logo domain={domain} user={user} />
            <Flex flexDirection='row' gap={8} alignItems='center'>
              {user && <Logout />}
              <Button
                w='60px'
                h='50px'
                border='1px'
                bgColor='transparent'
                onClick={handleClick}
              >
                <Icon as={HiOutlineX} fontSize='lg' />
              </Button>
            </Flex>
          </ModalHeader>
          <ModalBody ref={menu} display='flex' my={6}>
            <Suspense>
              <Navigation user={user} />
            </Suspense>
            <Icon
              as={TbSquareRoundedArrowDown}
              pos='absolute'
              bottom={1}
              right={4}
              display={showDownIcon ? 'none' : 'inline-block'}
            />
          </ModalBody>
          <ModalFooter
            minH='60px'
            display='flex'
            flexDirection='column'
            alignItems='start'
            gap={3}
            px={4}
            py={3}
          >
            <PrivacyTermsLinks handleClick={handleClick} />
            <Text fontSize='xs' color='GrayText'>
              @ {new Date().getFullYear()} eCom in Motion
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuDrawer;
