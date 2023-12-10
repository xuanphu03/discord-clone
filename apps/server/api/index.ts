import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';

const app = new Hono().basePath('/api');

app.get('/sign-in', (c) => c.json({ token: '123321' }))

export default handle(app);
