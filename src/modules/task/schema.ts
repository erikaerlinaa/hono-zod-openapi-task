import { z } from "@hono/zod-openapi";

export const createTaskSchema = z.object({
    title: z.string().min(1).openapi({ example: "Belajar Hono" }),
    description: z.string().min(1).openapi({ example: "Selesaikan modul task hari ini" }),
    done: z.boolean().default(false).openapi({ example: false }),
}).openapi("CreateTask");

export const taskSchema = z.object({
    id: z.number().openapi({ example: 1 }),
    title: z.string().openapi({ example: "Belajar Hono" }),
    description: z.string().openapi({ example: "Selesaikan modul task hari ini" }),
    done: z.boolean().openapi({ example: false }),
}).openapi("Task");

export const taskIdParamSchema = z.object({
    id: z.string().openapi({ param: { name: "id", in: "path" }, example: "1" }),
});
