
import { Database, SQLiteError } from "bun:sqlite"

const connect = (): Database => {
  try {
    const db = new Database("db.sqlite")
    return db
  } catch (error) {
    throw error
  }
}

export default connect
