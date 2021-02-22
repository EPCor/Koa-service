const Koa = require('koa');

const app = new Koa();
const port = process.port || 8088;

app.use(ctx => {
  ctx.body = 'Hello World!';
});

app.listen(port, () => console.log(`Start on port ${port}`));

module.exports = app;
