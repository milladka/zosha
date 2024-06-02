import { create } from 'zustand';

export const cityStore = create((set) => ({
    city: 19,
    setCity: (id) => set(() => ({ city: id })),
    modalCity: false,
    setModalCity: () => set((state) => ({ modalCity: !state.modalCity })),
}))