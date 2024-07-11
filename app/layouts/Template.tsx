'use client';

import { useBreakpoint } from '@chakra-ui/react';
import BaseTemplate from './BaseTemplate';
import MDTemplate from './MDTemplate';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const layoutValue = useBreakpoint({ ssr: false });

  console.log(layoutValue);

  return layoutValue === 'base' ? (
    <BaseTemplate>{children}</BaseTemplate>
  ) : (
    <MDTemplate>{children}</MDTemplate>
  );
};

export default Layout;
