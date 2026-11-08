import { Database } from "bun:sqlite"
import { Hono } from "hono"
import { Note, NoteResponse, repository } from "./repo";
import { service } from "./service";

export const handler = (db: Database) => {
  const r = new Hono()

  const repo = repository(db)
  const svc = service(repo)

  // routes
  r.get("/", (c) => {
    const userId = c.req.raw.headers.get("userId")
    if (!userId) return c.json({message:"user not found"}, 404)
    const data = svc.getNotes(userId)
    return c.json(data)
  })
  r.get("/:id", (c) => {
    const id = c.req.param("id")
    const data = svc.getNote(id)

    return c.json(data)
  })
  r.post("/", async (c) => {

    const note = await c.req.json<NoteResponse>()
    const data = await svc.addNote(note)

    return c.json(data)
  })
  r.delete("/:id", (c) => {
    const id = c.req.param("id")
    const data = svc.deleteNote(id)

    return c.json(data)
  })

  r.patch("/:id", async (c) => {

  })

  return r
}
