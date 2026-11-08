import { Login, Register } from "@/services";
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

  login: (email:string, password:string) => Promise<void>
  register: (email:string, password:string, username:string) => Promise<void>
}


const AuthStore = create<store>()((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,

  login: async (eml: string, pwd: string) => {
    const res = await Login(eml, pwd)
    set({
      isAuthenticated: true,
      user: res.user
    })
    console.log("login successful")
  },
  register: async (email: string, password: string, username: string) => {
    const res = await Register(email, password, username)
    set({
      isAuthenticated: true,
      user: res.user
    })
    console.log("register successful")

  }

}))

export default AuthStore
