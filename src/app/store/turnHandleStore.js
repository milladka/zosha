import { create } from 'zustand';

export const turnStore = create((set) => ({
    modal: false,
    user: null,
    dr: '',
    logined: false,
    setModal: (dr) => set((state) => ({ modal: !state.modal, dr: dr })),
    setUser: (user) => set(() => ({ user: user, logined: true })),
    delUser: () => set(() => ({ user: null, logined: false }))
}))