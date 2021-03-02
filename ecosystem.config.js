const envConfigs = require('dotenv').config().parsed;
const commonConfig = {
  node_args: ['--es-module-specifier-resolution=node'],
  instances: 'max',
  max_memory_restart: '512M',
  autorestart: true,
  max_restarts: 3,
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
      ...commonConfig,
      name: 'service-dev',
      script: 'src',
      watch: ['src'],
      exec_interpreter: './node_modules/.bin/babel-node',
      node_args: process.env.inspect
        ? ['--inspect', ...commonConfig.node_args]
        : commonConfig.node_args,
      exec_mode: 'fork_mode',
      instances: 1,
    },
    {
      ...commonConfig,
      name: 'service',
      script: 'dist',
      watch: ['dist'],
    },
  ],
};
