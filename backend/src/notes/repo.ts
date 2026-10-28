import { Database } from "bun:sqlite"

export const repository = (db: Database) => {
  return {
    getNotes: () => {
      db.transaction(() => {

      })
    }
 }
}
