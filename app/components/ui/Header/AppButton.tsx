import { logout } from '@/app/app/auth/logout/actions';
import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { Domain } from './Header';

const AppButton = ({ path }: { path: string }) => {
  return path === '/account' ? (
    <form action={logout}>
      <Button type='submit' _hover={{ textDecoration: 'none' }}>
        Log out
      </Button>
    </form>
  ) : (
    <Button>
      <Link href='/account' _hover={{ textDecoration: 'none' }}>
        Account
      </Link>
    </Button>
  );
};

export default AppButton;
