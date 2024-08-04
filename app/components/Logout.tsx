'use client';

import { logout } from '@/app/app/auth/logout/actions';
import { useUserDetailsStore, useUserStore } from '@/app/stores/userStore';
import { Button } from '@chakra-ui/react';
import { useStore } from 'zustand';

export default function Logout() {
  const { removeUser } = useStore(useUserStore, (state) => ({
    removeUser: state.removeUser,
  }));
  const { removeUserDetails } = useStore(useUserDetailsStore, (state) => ({
    removeUserDetails: state.removeUserDetails,
  }));

  const onSubmit = () => {
    removeUser();
    removeUserDetails();
  };

  return (
    <form action={logout} onSubmit={onSubmit}>
      <Button type='submit' _hover={{ textDecoration: 'none' }}>
        Log out
      </Button>
    </form>
  );
}
