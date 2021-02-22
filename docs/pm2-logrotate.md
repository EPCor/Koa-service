# pm2-logrotate

[GitHub](https://github.com/keymetrics/pm2-logrotate/)

## Install

- `$ pm2 install pm2-logrotate`;
- `$ pm2 install pm2-logrotate@2.6.0`;

## Configure

> ~/.pm2/module.conf.json@pm2-logrotate

- `max_size`: 10M
- `retain`: 30 file logs
- `compress`: false
- `dateFormat`: YYYY-MM-DD_HH-mm-ss
- `rotateModule`: true
- `workerInterval`: 30 in secs
- `rotateInterval`: 0 0 \* \* \* everyday at midnight
- `TZ`: system time

## Usage

> pm2 set pm2-logrotate:<param> <value>

- `$ pm2 set pm2-logrotate:max_size 10M`;
- `$ pm2 set pm2-logrotate:retain 7`;
- `$ pm2 set pm2-logrotate:workerInterval 60`;
