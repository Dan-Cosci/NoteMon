import { getNotes } from "@/services";
import type { Note } from "@/types";
import { create } from "zustand"

interface store {
  Notes: Note[]
  GetNotes: () => Promise<void>
  UpdateNote: () => Promise<void>
}


const NoteStore = create<store>()((set) => {
  return {
    Notes: [],
    GetNotes: async () => {

      try {
        const res = await getNotes()
        set({Notes: res})

      } catch (err) {
        console.error(err);
      } finally {
        console.log("success")
      }
    },
    UpdateNote: async () => { }
  }
})

export default NoteStore
