import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.post('/', (c) => c.json({ message: 'Hello world!' }));
app.post('/sign-in', (c) => c.json({ token: '123321' }));

export default handle(app);
