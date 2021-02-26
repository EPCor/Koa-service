import Koa from 'koa';
import config from '@/config';

const app = new Koa();
const { port } = config;

app.use(ctx => {
  ctx.body = 'Hello World!';
});

app.listen(port, () => console.log(`Start on port ${port}`));

export default app;
