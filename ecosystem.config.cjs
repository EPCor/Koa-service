const envConfigs = require('dotenv').config().parsed;
const common = {
  name: 'service',
  script: './dist/index.js',
  node_args: ['--es-module-specifier-resolution=node'],
  instances: 'max',
  max_memory_restart: '512M',
  autorestart: true,
  max_restarts: 10,
  watch: true,
  ignore_watch: ['node_modules', '.vscode', 'logs', 'docs'],
  merge_logs: true,
  error_file: './logs/err.log',
  out_file: './logs/out.log',
  log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  env: {
    NODE_ENV: 'development',
    ...envConfigs,
  },
  env_production: {
    NODE_ENV: 'production',
    ...envConfigs,
  },
};

console.log(envConfigs);

module.exports = {
  apps: [
    {
      ...common,
      name: 'service-dev',
      instances: 1,
    },
    {
      ...common,
      name: 'service-debug',
      node_args: ['--inspect', '--es-module-specifier-resolution=node'],
      instances: 1,
    },
    {
      ...common,
      name: 'service',
    },
  ],
};
