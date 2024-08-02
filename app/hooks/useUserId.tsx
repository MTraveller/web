import React, { useEffect, useState } from 'react';
import { useStore, useUserStore } from '../stores/userStore';

export const useUserId = () => {
  const id = useStore(useUserStore, (state) => state.id);
  const [userId, setUserId] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    if (id) setUserId(id);
  }, [id]);

  if (userId === undefined) return undefined;
  return userId;
};
