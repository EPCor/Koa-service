export function catchError(options) {
  return async function catchErrorMiddleware(ctx, next) {
    try {
      await next();
    } catch (err) {
      switch (err.status) {
        case 404:
          ctx.body = 'Not Found!';
          break;
        case 401:
          ctx.body = 'Unauthorized';
          break;
        default:
          ctx.status = err.status || 500;
          ctx.body = 'Server Error';
      }
      ctx.app.emit('error', err, ctx);
    }
  };
}

export function onError(err, ctx) {
  if (ctx.status !== 404) {
    console.error('Server Error:', err, ctx);
  }
}
