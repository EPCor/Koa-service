const envConfigs = require('dotenv').config().parsed;
const commonConfigs = {
  script: './dist/index.js',
  node_args: ['--es-module-specifier-resolution=node'],
  instances: 'max',
  max_memory_restart: '512M',
  autorestart: true,
  max_restarts: 10,
  watch: ['dist'],
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
const devConfigs = {
  node_args: commonConfigs.node_args,
  instances: 1,
};
const { inspect, loadBabel } = process.env;

if (inspect) devConfigs.node_args.push('--inspect');
if (loadBabel) {
  devConfigs.node_args.push('--experimental-loader=@node-loader/babel');
  Object.assign(devConfigs, {
    script: 'src',
    watch: ['src'],
  });
}
console.log(envConfigs);

module.exports = {
  apps: [
    {
      ...commonConfigs,
      ...devConfigs,
      name: 'service-dev',
    },
    {
      ...commonConfigs,
      name: 'service',
    },
  ],
};
