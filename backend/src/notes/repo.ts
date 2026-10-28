import { Database } from "bun:sqlite"

export const repository = (db: Database) => {
  return {
    getNotes: () => {
      return "hellos"
  }
 }
}
