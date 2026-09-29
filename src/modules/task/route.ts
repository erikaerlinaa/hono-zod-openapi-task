import { createRoute, z } from '@hono/zod-openapi';
import { createTaskSchema, taskSchema, taskIdParamSchema } from './schema.js';

export const listTaskRoute = createRoute({
    method: 'get',
    path: '/',
    tags: ['Tasks'],
    summary: 'List all tasks',
    responses: {
        200: {
            description: 'List of tasks',
            content: { 'application/json': { schema: z.array(taskSchema) } },
        },
    },
});

export const getTaskRoute = createRoute({
    method: 'get',
    path: '/{id}',
    tags: ['Tasks'],
    summary: 'Get a task by id',
    request: { params: taskIdParamSchema },
    responses: {
        200: {
            description: 'A single task',
            content: { 'application/json': { schema: taskSchema } },
        },
    },
});

export const createTaskRoute = createRoute({
    method: 'post',
    path: '/',
    tags: ['Tasks'],
    summary: 'Create a task',
    request: {
        body: {
            content: { 'application/json': { schema: createTaskSchema } },
        },
    },
    responses: {
        200: {
            description: 'The created task',
            content: { 'application/json': { schema: taskSchema } },
        },
    },
});

export const updateTaskRoute = createRoute({
    method: 'patch',
    path: '/{id}',
    tags: ['Tasks'],
    summary: 'Update a task by id',
    request: { params: taskIdParamSchema },
    responses: {
        200: {
            description: 'The updated task',
            content: { 'application/json': { schema: taskSchema } },
        },
    },
});

export const deleteTaskRoute = createRoute({
    method: 'delete',
    path: '/{id}',
    tags: ['Tasks'],
    summary: 'Delete a task by id',
    request: { params: taskIdParamSchema },
    responses: {
        200: {
            description: 'Deletion confirmation',
            content: { 'application/json': { schema: z.object({ message: z.string() }) } },
        },
    },
});
