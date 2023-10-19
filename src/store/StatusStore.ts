import { create } from 'zustand'

export const useStatusStore = create((set) => ({
    core: false,
    controller: false,
    setStatus: (core: boolean, controller: boolean) => set({ core, controller }),
    setAllOffline: () => set({ core: false, controller: false }),
    enableController: () => set({ controller: true})
}))