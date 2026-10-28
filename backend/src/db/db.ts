
import { Database, SQLiteError } from "bun:sqlite"

const connect = async () => {
  try {
    console.log("initializing database connection")
    const db = new Database("db.sqlite")

    const schema = await Bun.file("./src/db/schema.sql").text()
    for (const sch of schema.split(";")) {
      if (sch.trim()) {
        db.run(sch)
        console.log("executed model: ", sch)
    }
  }

    return db
  } catch (error) {
    throw error
  }
}

export default connect
