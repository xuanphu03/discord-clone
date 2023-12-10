import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';
import { cors } from 'hono/cors'

export const config = {
  runtime: 'edge'
};

const app = new Hono().basePath('/api');

app.use(
  '*',
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

app.post('/sign-in', (c) => c.json({ token: '123321' }))
app.post('/sign-up', (c) => c.json({ token: '123321' }));

export default handle(app);
