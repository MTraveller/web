'use client';

import { setModeCookie } from '@/utils/modeCookie';
import { Icon, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface Mode {
  mode: 'dark' | 'light';
}

const ColorModeSwitch = ({ mode }: Mode) => {
  const { toggleColorMode } = useColorMode();

  const handleClick = () => {
    toggleColorMode();
    setModeCookie(mode);
  };

  const icon = {
    dark: FaSun,
    light: FaMoon,
  };

  return <Icon boxSize={5} as={icon[mode]} onClick={handleClick} />;
};

export default ColorModeSwitch;
