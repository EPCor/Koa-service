/**
 * koa session
 * @param {import('koa').Context} ctx
 */
export default function session(ctx) {
  const { user } = ctx.session;
  if (!user) {
    ctx.session.user = `${Date.now()}`;
    ctx.body = 'session success';
  } else {
    ctx.body = `user ${user}`;
  }
}
