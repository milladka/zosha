import { create } from 'zustand';

export const cityStore = create((set) => ({
    city: 284,
    cities: [],
    loading: true,
    setCities: (cities) => set(() => ({ cities: cities, loading: false })),
    setCity: (id) => set(() => ({ city: id })),
    modalCity: false,
    setModalCity: () => set((state) => ({ modalCity: !state.modalCity })),
}))