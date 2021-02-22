const { secret } = process.env;
import { sign } from '@/lib/jwt';

/**
 * JSON Web Token
 * @param {import('koa').Context} ctx
 */
export default function jwt(ctx) {
  const { uid } = ctx.state;
  if (uid) {
    ctx.body = uid;
  } else {
    const token = sign(
      {
        uid: Date.now(),
      },
      secret,
      {
        expiresIn: '2h',
      }
    );
    ctx.set('token', token);
    ctx.body = token;
  }
}
