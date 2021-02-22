import Koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-session';
import koaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import { catchError, onError } from '@/middleware/error';
import router from '@/routes';
import { validateJWT } from '@/lib/jwt';
import { SESSION_CONFIG } from '@/lib/constants';

const { port = 8088, secret } = process.env;
const app = new Koa({ keys: [secret] });

app.use(catchError());
app.use(logger());
app.use(koaStatic('./public/'));
app.use(session(SESSION_CONFIG, app));
app.use(validateJWT());
app.use(bodyParser());
app.use(router.routes());

app.on('error', onError);
app.listen(port, () => console.log(`Start on port ${port}`));

export default app;
