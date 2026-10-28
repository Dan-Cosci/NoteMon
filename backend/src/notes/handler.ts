import { Database } from "bun:sqlite"
import { Hono } from "hono"
import { repository } from "./repo";
import { service } from "./service";

export const handler = (db: Database) => {
  const r = new Hono()

  const repo = repository(db)
  const svc = service(repo)


  // routes
  r.get("/", (c) => {
    return c.json(svc.getNotes())
  })
  r.post("/", (c) => {
    return c.json("wip post")
  })
  r.delete("/:id", (c) => {
    return c.json("wip delete")
  })

  return r
}
