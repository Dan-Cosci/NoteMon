import { Hono } from 'hono'
import {cors} from 'hono/cors'
import connect from './db/db'

import { handler as notesHandler } from './notes/handler'
import { logger } from 'hono/logger';
import Config from './core/config'
import { createAuth } from './auth/auth'

const cfg = Config()

const db = await connect(cfg)
const auth = createAuth(cfg, db)
const app = new Hono()

app.use(logger())
app.use(cors({
  origin: cfg.frontend_url,
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowHeaders: ["Content-Type", "Authorization"],
}))

const api = new Hono().basePath("/api/v1")

api.route("/notes", notesHandler(db))

app.route("/", api)

export default app
