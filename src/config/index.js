import appConfig from './app.json';

export const { env } = process;

export default {
  ...env,
  ...appConfig,
};
