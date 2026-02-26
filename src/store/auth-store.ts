import { create } from "zustand"
import type { User } from "../types/auth-types"

type AuthStore = {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  setAuth: (user: User, token: string) => void
  signOut: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setAuth: (user, token) =>
    set({
      user,
      token,
      isAuthenticated: true,
    }),

  signOut: () =>
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    }),
}))
