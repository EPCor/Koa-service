const Koa = require('koa');
const config = require('@/config');

const app = new Koa();
const { port } = config;

app.use(ctx => {
  ctx.body = 'Hello World!';
});

app.listen(port, () => console.log(`Start on port ${port}`));

module.exports = app;
