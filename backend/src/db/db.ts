
import { Database, SQLiteError } from "bun:sqlite"
import Config from "../core/config";

const connect = async (config: ReturnType<typeof Config>) => {
  try {
    console.log("initializing database connection")
    const db = new Database(config.database)

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
