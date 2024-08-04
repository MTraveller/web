import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export const ButtonLink = ({
  size,
  weight,
  color,
  label,
  path,
}: {
  size?: string;
  weight?: string;
  color?: string;
  label: string;
  path: string;
}) => (
  <Link href={path} passHref legacyBehavior>
    <Button as='a' colorScheme={color} size={size} fontWeight={weight}>
      {label}
    </Button>
  </Link>
);
