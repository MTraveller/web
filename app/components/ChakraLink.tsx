'use client';

import { Link } from '@chakra-ui/next-js';

export const ChakraLink = ({
  href,
  label,
  color,
  hover,
  onClick,
}: {
  href: string;
  label: string;
  color?: string;
  hover?: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    color={color}
    _hover={{ textDecoration: !hover ? 'none' : 'underline' }}
    onClick={onClick}
  >
    {label}
  </Link>
);
