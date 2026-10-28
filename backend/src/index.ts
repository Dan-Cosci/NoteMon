import { Hono } from 'hono'
import connect from './db/db'

import { handler as notesHandler } from './notes/handler'

const app = new Hono()
const db = connect()

const api = new Hono().basePath("/api/v1")
api.route("/notes",notesHandler(db))

app.route("/", api)

export default app
