import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const bootstrap = async () => {
  const app = new Hono().basePath('/api');

  app.get('/', (c) => c.json({ message: 'Hello world!' }));
  app.get('/sign-in', (c) => c.json({ token: '123321' }));

  serve(app);
  console.log('Listening on http://localhost:3000/api');
};

bootstrap();
