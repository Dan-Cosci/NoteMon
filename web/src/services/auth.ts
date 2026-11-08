import { instance } from "./axios";

export const Login = async (email: string, password: string) => {
  const res = await instance.post("/auth/sign-in/email", {
    email, password
  })
  return res.data
}


export const Register = async (email: string, password: string, name: string) => {
  const res = await instance.post("/auth/sign-up/email", {
    email, password, name
  })
  return res.data
}
