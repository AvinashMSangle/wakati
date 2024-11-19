import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';

const app = new Hono();

app.use(logger());
app.use(cors());
const wpm=238;

app.get('/status', (c) => {
  return c.json({message:"API is Active"});
});

app.get('/', (c) => {
  const text = c.req.query("text");

  if (!text) {
    return c.json({message:"Please provide a text"});
  }
  
  const wordCount = text.split(/\s+/).length;

  return c.json({wordCount});

});

app.post('/',async (c) => {
  const {text} = await c.req.json();

  if (!text) {
    return c.json({message:"Please provide a text"}, 400);
  }

  return c.json({count: text.split(/\s+/).length},400);
});

export default app;
