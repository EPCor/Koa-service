export const SESSION_CONFIG = {
  key: 'sess', // cookie key
  maxAge: 86400, // maxAge in ms (1 days)
  autoCommit: true, // automatically commit headers (true)
  overwrite: true, // can overwrite or not (true)
  httpOnly: true, // httpOnly or not (true)
  signed: true, // signed or not (true)
  rolling: false, // Force a session identifier cookie to be set on every response
  renew: false, // renew session when session is nearly expired, (false)
  secure: false,
  sameSite: null, // session cookie sameSite options (null)
};
