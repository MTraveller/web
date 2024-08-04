'use client';

import { Link } from '@chakra-ui/next-js';

export const ChakraLinkWithChildren = ({
  href,
  hover,
  onClick,
  children,
}: {
  href: string;
  hover?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    _hover={{ textDecoration: !hover ? 'none' : 'underline' }}
    onClick={onClick}
  >
    {children}
  </Link>
);
