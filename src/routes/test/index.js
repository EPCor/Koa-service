import Router from '@koa/router';
import authentication from './authentication';
import session from './session';
import jwt from './jwt';

const router = new Router();

export default router
  .use((ctx, next) => ctx.app.env !== 'production' && next())
  .get('/authentication', authentication)
  .get('/session', session)
  .get('/jwt', jwt);
