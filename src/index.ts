import { serve } from '@hono/node-server'
import { OpenAPIHono } from '@hono/zod-openapi'
import { Scalar } from '@scalar/hono-api-reference'
import { taskRouter } from './modules/task/router.js';

const app = new OpenAPIHono()
  .route("/tasks", taskRouter);

app.doc('/doc', {
  openapi: '3.1.0',
  info: {
    title: 'Task API',
    version: '1.0.0',
  },
});

app.get('/scalar', Scalar({ url: '/doc' }));

serve({
  fetch: app.fetch,
  port: 3001
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
  console.log(`Docs available at http://localhost:${info.port}/scalar`)
})
