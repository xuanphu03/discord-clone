import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/sign-in', (c) =>  c.json({ token: '123312' }));

export default handle(app);