import { toast } from "react-hot-toast";
import { instance } from "./axios"
import { type Note } from "@/types"

export const getNotes = async () => {
  const data = await instance.get("/notes")
  return data.data
}

export const getNote = async (id: string) => {
  const data = await instance.get(`/notes/${id}`)
  return data.data
}

export const createNote = async (note: Note) => {
  const data = await instance.post("/notes", { ...note })
  toast.success("Note Created")
  return data.data
}

export const updateNote = async (note:Note) => {
  const data = await instance.patch(`/notes/${note.id}`, { ...note })
  toast.success("Note Updated")
  return data.data
}
