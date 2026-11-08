import { create } from "zustand";

interface AuthUser {
  name: string
  email: string
  emailVerified: boolean
  image: string | null
  createdAt: Date
  updatedAt: Date
  id: string
}

interface store {
  user: AuthUser | null
  isLoading: Boolean
  isAuthenticated: Boolean
}


const AuthStore = create<store>()((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false
}))

export default AuthStore
