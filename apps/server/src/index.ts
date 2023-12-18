import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono();
//hihi
app.get('/', (c) => c.text("Hello"));
app.get('/sign-in', (c) =>  c.json({ token: '123312' }));

export default handle(app);