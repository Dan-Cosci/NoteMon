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

    addNote: async (userId: string, content: NoteResponse) => {
      const part: Note = {
        user_id: userId,
        id: crypto.randomUUID(),
        ...content,
        created_at: new Date(),
      }

      repo.createNote(part)

      return part
    },

    deleteNote: (id: string) => {
      return repo.deleteNote(id)
    },

    updateNote: async (userId: string,noteId: string, content: NoteResponse) => {
      const part: Note = {
        user_id: userId,
        id: noteId,
        ...content
      }

      repo.updateNote(part)
      return part
    }
  }
}
