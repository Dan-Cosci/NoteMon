import { Database } from "bun:sqlite"
import { Hono } from "hono"
import { repository } from "./repo";
import { service } from "./service";

export const handler = (db: Database) => {
  const r = new Hono()

  const repo = repository(db)
  const svc = service(repo)

  r.post("/login", async (c) => {
    const { email, password } = await c.req.json<{email:string, password:string}>()
    return c.json({
      email: email,
      password: password,
      status: "Wip"
    })
  })
  r.get("/test", (c) => {
    return c.json({
      success: true
    })
  })

  return r
}
