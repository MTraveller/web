import { create } from 'zustand';

interface MenuStore {
  menuIsOpen: true | false;
  setOpen: (isOpen: true | false) => void;
}

const useMenuStore = create<MenuStore>(set => ({
  menuIsOpen: false,
  setOpen: (isOpen: true | false) => set(() => ({ menuIsOpen: isOpen })),
}));

export default useMenuStore;
