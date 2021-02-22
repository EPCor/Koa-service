const Koa = require('koa');

const app = new Koa();
const port = process.port || 8088;

app.use(ctx => {
  ctx.body = 'Hello';
});

app.listen(port, () => console.log(`start on ${port}`));

module.exports = app;
