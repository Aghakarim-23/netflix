import { create } from 'zustand'
import { persist } from 'zustand/middleware'
1

export const authStore = create(
  persist(
    (set) => ({
      token: '',
      addToken: (token) => set({ token: token }),
    })
  )
  
)


