import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.post('/', (c) => c.json({ message: 'HELLO WORLD!!!' }))
app.post('/sign-in', (c) => c.json({ token: '123321' }));
console.log(app);

export default handle(app)
