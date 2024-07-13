'use client';

import { useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

interface Mode {
  mode: 'dark' | 'light';
}

const ColorModeSwitch = ({ mode }: Mode) => {
  const { toggleColorMode } = useColorMode();
  const [colorMode, setColorMode] = useState<'dark' | 'light'>(mode);
  const getLocalStorageColorMode = () =>
    localStorage.getItem('chakra-ui-color-mode') as 'dark' | 'light';

  useEffect(() => {
    fetch('/api/getModeCookie')
      .then((response) => response.json())
      .then((data) => {
        if (data.colorMode) {
          setColorMode(data.colorMode);
          console.log('Fetched color mode from cookie:', data.colorMode);
        } else {
          console.log('No color mode cookie found, setting default.');
          const defaultMode = getLocalStorageColorMode() || 'dark';
          setColorMode(defaultMode);
          fetch('/api/setModeCookie', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ colorMode: defaultMode }),
          }).then((response) => {
            if (response.ok) {
              console.log('Default color mode cookie set successfully');
            } else {
              console.error('Failed to set default color mode cookie');
            }
          });
        }
      });
  }, []);

  const handleClick = async () => {
    toggleColorMode();
    const updatedColorMode = getLocalStorageColorMode();
    setColorMode(updatedColorMode);
    fetch('/api/setModeCookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ colorMode: updatedColorMode }),
    }).then((response) => {
      if (response.ok) {
        console.log('Cookie set successfully');
      } else {
        console.error('Failed to set cookie');
      }
    });
  };

  const icon = {
    dark: FaSun,
    light: FaMoon,
  };

  return <Icon boxSize={5} as={icon[mode]} onClick={handleClick} />;
};

export default ColorModeSwitch;
