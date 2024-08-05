import { create } from 'zustand';

interface GSAPStore {
  form: string | null;
  setForm: (formData: string | null) => void;
}

const useGSAPStore = create<GSAPStore>(set => ({
  form: null,
  setForm: (formData: string | null) => set(() => ({ form: formData })),
}));

export default useGSAPStore;
