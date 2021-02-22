/**
 * HTTP Basic Authentication
 * @param {import('koa').Context} ctx
 */
export default function authentication(ctx) {
  const { authorization } = ctx.req.headers;

  if (checkAuthentication(authorization)) {
    ctx.body = 'success';
  } else {
    ctx.set('WWW-Authenticate', 'Basic realm=icefine.com');
    ctx.response.status = 401;
  }
}

/**
 * Check Authentication
 * @param {string} authorization: Basic eno6emhpbGlkYWxp
 */
function checkAuthentication(authorization) {
  if (!authorization) return false;

  const userPassBase64 = authorization.split(' ')[1];
  const userPass = Buffer.from(userPassBase64, 'base64').toString();

  return userPass === 'user:pass';
}
