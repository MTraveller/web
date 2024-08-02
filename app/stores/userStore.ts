'use client';

import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface UserStore {
  id: string | null;
  email: string | null;
  setUser: (id: string, email: string) => void;
  removeUser: () => void;
}

interface UserDetailsStore {
  available_credit: number | null;
  avatar_url: string | null;
  billing_address: string | null;
  first_name: string | null;
  last_name: string | null;
  setUserDetails: (
    available_credit: number,
    avatar_url: string,
    billing_address: string,
    first_name: string,
    last_name: string
  ) => void;
  removeUserDetails: () => void;
}

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        id: null,
        email: null,
        setUser: (id: string, email: string) => set(() => ({ id, email })),
        removeUser: () => set(() => ({ id: null, email: null })),
      }),
      { name: 'userStore' }
    )
  )
);

export const useUserDetailsStore = create<UserDetailsStore>()(
  devtools(
    persist(
      (set) => ({
        available_credit: null,
        avatar_url: null,
        billing_address: null,
        first_name: null,
        last_name: null,
        setUserDetails: (
          available_credit: number,
          avatar_url: string,
          billing_address: string,
          first_name: string,
          last_name: string
        ) =>
          set(() => ({
            available_credit,
            avatar_url,
            billing_address,
            first_name,
            last_name,
          })),
        removeUserDetails: () =>
          set(() => ({
            available_credit: null,
            avatar_url: null,
            billing_address: null,
            first_name: null,
            last_name: null,
          })),
      }),
      {
        name: 'userDetailsStore',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

// export const isUser = () => {
//   const id = useStore(useUserStore, (state) => state.id);
//   console.log(id);

//   useEffect(() => {
//     if (window !== undefined && !id) redirect('/login');
//   }, [id]);
// };
