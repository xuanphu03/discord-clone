import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.get('/', (c) => c.json({ message: 'HELLO WORLD!!!' }))
app.post('/sign-in', (c) => c.json({ token: '123321' }));

export default handle(app)
