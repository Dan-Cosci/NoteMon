import sqlite3  from "sqlite3"
import { open } from "sqlite"

export default db => async () => {
  return await open({
    filename: "temp/db.sqlite",
    driver: sqlite3.Database()
  })
}
