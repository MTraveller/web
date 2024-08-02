'use client';

import { logout } from '@/app/app/auth/logout/actions';
import {
  useStore,
  useUserDetailsStore,
  useUserStore,
} from '@/app/stores/userStore';
import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';
import Loader from '../../Loader';

const AppButton = ({
  domain: { path, env, hostname },
  user,
}: {
  domain: { path: string; env: string; hostname: string };
  user: string | null | undefined;
}) => {
  const userState = useStore(useUserStore, (state) => state);
  const userDetailsState = useStore(useUserDetailsStore, (state) => state);

  const doLogout = () => {
    const removeUser = userState?.removeUser;
    const removeUserDetails = userDetailsState?.removeUserDetails;

    if (removeUser && removeUserDetails) {
      removeUser();
      removeUserDetails();
    }
  };

  if (path === '/login') return null;

  if (user)
    return path === '/account' ? (
      <form action={logout} onSubmit={doLogout}>
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

  if (user === undefined)
    return (
      <Button width='100px' height='40px'>
        <Loader />
      </Button>
    );

  return (
    <Button>
      <Link
        href={(env === 'dev' ? 'http' : 'https') + `://app.${hostname}/login`}
        _hover={{ textDecoration: 'none' }}
        target='_self'
      >
        Log in
      </Link>
    </Button>
  );
};

export default AppButton;
