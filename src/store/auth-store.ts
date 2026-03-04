import { create } from "zustand"
import type { User } from "../types/auth-types"
import { persist } from "zustand/middleware"
import { getStarterKey } from "../utils/get-start-key"

type AuthStore = {
  user: User | null
  token: string | null
  setAuth: (user: User, token: string) => void
  signOut: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,

      setAuth: async (user, token) => {
        set({
          user,
          token,
        })
      },

      signOut: () => {
        const user = get().user

        if (user) {
          const key = getStarterKey(user.id)

          localStorage.removeItem(key)
        }

        set({
          user: null,
          token: null,
        })
      },
    }),
    {
      name: "auth-storage",
    }
  )
)
