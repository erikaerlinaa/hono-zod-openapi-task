import { OpenAPIHono } from '@hono/zod-openapi';
import {
    listTaskRoute,
    getTaskRoute,
    createTaskRoute,
    updateTaskRoute,
    deleteTaskRoute,
} from './route.js';

export const taskRouter = new OpenAPIHono()
    .openapi(listTaskRoute, (c) => {
        return c.json([{ id: 1, title: "Belajar Hono", description: "Selesaikan modul task hari ini", done: false }]);
    })
    .openapi(getTaskRoute, (c) => {
        const { id } = c.req.valid('param');
        return c.json({ id: Number(id), title: "Belajar Hono", description: "Selesaikan modul task hari ini", done: false });
    })
    .openapi(createTaskRoute, (c) => {
        const body = c.req.valid('json');
        return c.json({ id: 1, title: body.title, description: body.description, done: body.done });
    })
    .openapi(updateTaskRoute, (c) => {
        const { id } = c.req.valid('param');
        return c.json({ id: Number(id), title: "Belajar Hono", description: "Selesaikan modul task hari ini", done: true });
    })
    .openapi(deleteTaskRoute, (c) => {
        return c.json({ message: "Task deleted successfully" });
    });
