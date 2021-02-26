const appConfig = require('./app.json');

const { env } = process;

module.exports = {
  ...env,
  ...appConfig,
};
