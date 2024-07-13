'use client';

import { setModeCookie } from '@/utils/modeCookie';
import { Icon, useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface Mode {
  mode: 'dark' | 'light';
}

const ColorModeSwitch = ({ mode }: Mode) => {
  const { toggleColorMode } = useColorMode();
  const getLocalStorageColorMode = () =>
    localStorage.getItem('chakra-ui-color-mode') as 'dark' | 'light';

  useEffect(() => {
    const colorMode = getLocalStorageColorMode();
    if (colorMode) {
      setModeCookie(colorMode);
    }
  }, []);

  const handleClick = async () => {
    toggleColorMode();
    setModeCookie(getLocalStorageColorMode());
  };

  const icon = {
    dark: FaSun,
    light: FaMoon,
  };

  return <Icon boxSize={5} as={icon[mode]} onClick={handleClick} />;
};

export default ColorModeSwitch;
