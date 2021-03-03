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
const dynamicConfigs = {};
const { inspect, loadBabel } = process.env;

if (inspect) {
  dynamicConfigs.node_args = (
    dynamicConfigs.node_args || commonConfigs.node_args
  ).concat('--inspect');
}
if (loadBabel) {
  Object.assign(dynamicConfigs, {
    node_args: (dynamicConfigs.node_args || commonConfigs.node_args).concat(
      '--experimental-loader=@node-loader/babel'
    ),
    script: 'src',
    watch: ['src'],
  });
}

console.log(dynamicConfigs);
console.log(envConfigs);

module.exports = {
  apps: [
    {
      ...commonConfigs,
      name: 'service-dev',
      instances: 1,
      ...dynamicConfigs,
    },
    {
      ...commonConfigs,
      name: 'service',
      ...dynamicConfigs,
    },
  ],
};
