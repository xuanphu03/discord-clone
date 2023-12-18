"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const bootstrap = async () => {
    const app = new hono_1.Hono().basePath('/api');
    app.get('/', (c) => c.json({ message: 'Hello world!' }));
    app.get('/sign-in', (c) => c.json({ token: '123321' }));
    (0, node_server_1.serve)(app);
    console.log('Listening on http://localhost:3000/api');
};
bootstrap();
//# sourceMappingURL=index.js.map