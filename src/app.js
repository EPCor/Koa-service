import Koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-session';
import koaStatic from 'koa-static';
import mount from 'koa-mount';
import bodyParser from 'koa-bodyparser';
import { catchError, onError } from '@/middleware/error';
import router from '@/routes';
import { validateJWT } from '@/lib/jwt';
import config, { SESSION_CONFIG } from '@/config';

const { port, secret } = config;
const app = new Koa({ keys: [secret] });

app.use(catchError());
app.use(logger());
app.use(koaStatic('public'));
app.use(mount('/static', koaStatic('public', { extensions: ['html'] })));
app.use(session(SESSION_CONFIG, app));
app.use(validateJWT());
app.use(bodyParser());
app.use(router.routes());
app.on('error', onError);
app.listen(port, () => console.log(`Start on port ${port}`));

export default app;
