import { createMiddleware } from "hono/factory";
import { createAuth } from "../auth/auth";

const Authenticate = (auth: ReturnType<typeof createAuth>) => createMiddleware(async (c, next) => {

  const session = await auth.api.getSession({
    headers: c.req.raw.headers
  })

  if (!session) return c.json({
    message: "Unauthorized"
  }, 401)

  c.set("userId", session.user.id)
  await next()
  console.log("User verified")
})


export default Authenticate
