import { Hono } from 'hono'
import connect from './db/db'

import { handler as notesHandler } from './notes/handler'
import { logger } from 'hono/logger';

const db = await connect()
const app = new Hono()

app.use(logger())

const api = new Hono().basePath("/api/v1")
api.route("/notes",notesHandler(db))

app.route("/", api)

export default app
