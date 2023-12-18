"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const hono_1 = require("hono");
const vercel_1 = require("hono/vercel");
exports.config = {
    runtime: 'edge',
};
const app = new hono_1.Hono().basePath('/api');
app.get('/', (c) => c.json({ message: 'Hello world!' }));
app.get('/sign-in', (c) => c.json({ token: '123321' }));
exports.default = (0, vercel_1.handle)(app);
//# sourceMappingURL=index.js.map