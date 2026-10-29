import { instance } from "./axios"


export const getNotes = async () => {
  const data = await instance.get("/notes")
  return data.data
}
