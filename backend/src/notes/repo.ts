import { Database } from "bun:sqlite"

export interface Note {
  id: string
  user_id: string
  title: string
  content: string
  created_at: Date
  deleted_at?: Date | null
}

export interface NoteResponse{
  user_id: string
  title: string
  content: string
}

export const repository = (db: Database) => {

  // sql pre stmt
  const insert = db.prepare("INSERT INTO notes (id, user_id, title, content) VALUES ($id, $user_id, $title, $content)")
  const getUserNotes = db.prepare("SELECT * FROM notes WHERE user_id = $user AND deleted_at IS NULL")
  const deleteNote = db.prepare("UPDATE notes SET deleted_at = CURRENT_TIMESTAMP WHERE id = $note_id AND deleted_at IS NULL")
  const updateNote = db.prepare(`UPDATE notes SET title = $title, content = $content WHERE id = $id AND user_id = $user_id AND deleted_at IS NULL`)


  return {
    test: () => db.query("SELECT * FROM notes").all(),
    getNotes: (user_id: string) => getUserNotes.all({ $user: user_id }),
    createNote: (note: Note) => insert.run({
      $id: note.id,
      $user_id: note.user_id,
      $title: note.title,
      $content: note.content,
    }),
    deleteNote: (note_id: string) => deleteNote.run({ $note_id: note_id }),
    updateNote: (note: Note) => updateNote.run({
      $id: note.id,
      $user_id: note.user_id,
      $title: note.title,
      $content: note.content,
    }),
 }
}
