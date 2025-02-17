import { create } from 'zustand';

export const turnStore = create((set) => ({
    modal: false,
    user: null,
    dr: '',
    doctorId: '',
    logined: false,
    token: '',
    setToken: (token) => set(() => ({ token: token })),
    delToken: () => set(() => ({ token: '' })),
    setModal: (dr, id) => set((state) => ({ modal: !state.modal, dr: dr, doctorId: id })),
    setUser: (user) => set(() => ({ user: user, logined: true })),
    delUser: () => set(() => ({ user: null, logined: false }))
}))