import { create } from 'zustand';

export const turnStore = create((set) => ({
    modal: false,
    dr: '',
    setModal: (dr) => set((state) => ({ modal: !state.modal, dr: dr }))
}))