import Router from '@koa/router';
import test from './test';

const router = new Router();

export default router.use('/test', test.routes());
