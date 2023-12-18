import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const bootrap = async () => {
  const app = new Hono().basePath('/api');

  app.get('/', (c) => c.json({ message: 'Hello world!!!' }));
  app.get('/sign-in', (c) => c.json({ token: '123321' }));
  app.get('/sign-up', (c) => c.json({ token: '123312321' }));

  serve(app);
  console.log('http://localhost:3000');
};

bootrap();
