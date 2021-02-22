const commonConfig = {
  name: 'service',
  script: 'dist',
  node_args: ['--es-module-specifier-resolution=node'],
  instances: 'max',
  max_memory_restart: '512M',
  autorestart: true,
  max_restarts: 3,
  watch: true,
  ignore_watch: ['node_modules', '.vscode', 'logs', 'docs'],
  merge_logs: true,
  error_file: './logs/err.log',
  out_file: './logs/out.log',
  log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  env: {
    NODE_ENV: 'development',
    port: 8088,
  },
  env_production: {
    NODE_ENV: 'production',
    port: 8088,
  },
};
const devConfig = {
  script: 'src',
  exec_interpreter: 'babel-node',
  exec_mode: 'fork_mode',
  instances: 1,
};

module.exports = {
  apps: [
    {
      ...commonConfig,
      ...devConfig,
      name: 'service-dev',
    },
    {
      ...commonConfig,
      ...devConfig,
      name: 'service-debug',
      node_args: ['--inspect', '--es-module-specifier-resolution=node'],
    },
    {
      ...commonConfig,
      name: 'service',
    },
  ],
};
