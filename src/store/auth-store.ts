import { create } from "zustand"
import type { User } from "../types/auth-types"
import { persist } from "zustand/middleware"

type AuthStore = {
  user: User | null
  token: string | null
  setAuth: (user: User, token: string) => void
  signOut: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setAuth: (user, token) =>
        set({
          user,
          token,
        }),

      signOut: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
)
