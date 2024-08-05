'use client';

import { useEffect, useState } from 'react';
import { useBreakpoint as chakraBreakpoint } from '@chakra-ui/react';

export const useBreakpoint = () => {
  const breakPoint = chakraBreakpoint();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded && breakPoint;
};
