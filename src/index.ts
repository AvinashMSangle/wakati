import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  const text = c.req.query('text')
  return c.json({ text: text?.split(/\s+/).length})
})

export default app
