import { Hono } from 'hono'
import {cors} from 'hono/cors'
import connect from './db/db'

import { handler as notesHandler } from './notes/handler'
import { logger } from 'hono/logger';

const db = await connect()
const app = new Hono()

app.use(logger())
app.use(cors({
  origin: "http://localhost:5173",
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
}))

const api = new Hono().basePath("/api/v1")
api.route("/notes",notesHandler(db))

app.route("/", api)

export default app
