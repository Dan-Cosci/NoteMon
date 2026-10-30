import { instance } from "./axios"


export const getNotes = async () => {
  const data = await instance.get("/notes")
  return data.data
}

export const getNote = async (id: string) => {
  const data = await instance.get(`/notes/${id}`)
  return data.data
}
