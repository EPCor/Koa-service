import jwt from 'jsonwebtoken';
import koaJwt from 'koa-jwt';

const { secret } = process.env;

export function sign(data) {
  return jwt.sign(data, secret, { expiresIn: '7d' });
}

export function validateJWT(options) {
  return koaJwt({
    secret,
    getToken(ctx, opts) {
      const { token } = ctx.header;
      return token;
    },
    ...options,
  }).unless({
    path: ['/', '/favicon.ico', '/user/login', /^\/test/],
  });
}
