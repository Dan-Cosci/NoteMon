import { NoteResponse, Note, repository } from "./repo";

export const service = (repo: ReturnType<typeof repository>) => {
  return {
    getNotes: (userId:string) => {
      const data = repo.getNotes(userId)
      return data
    },
    getNote: (id: string) => {
      const data = repo.getNote(id)
      return data
    },

    addNote: async (content: NoteResponse) => {
      const part: Note = {
        id: crypto.randomUUID(),
        ...content,
        created_at: new Date(),
      }

      const data = repo.createNote(part)

      return data
    },

    deleteNote: (id: string) => {
      return repo.deleteNote(id)
    }

  }
}
