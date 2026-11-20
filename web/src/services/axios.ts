import axios, { AxiosError } from "axios"
import { toast } from "react-hot-toast";

export const instance = axios.create({
  baseURL: "http://192.168.254.103:8080/api/v1/",
  withCredentials: true
})


instance.interceptors.response.use((res) => {
  return res
}, (error: AxiosError) => {
  if (!error.response) return console.log("malformed response")
  // const status = error.response.status
  const message = error.response?.data?.message
  toast.error(`${message}`)

  return Promise.reject(error)
})
