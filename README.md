# Koa Engineering Configuration

A boilerplate for Koa Web application

This default `master` branch uses ES module, if you want to use CommonJs module you can switch to the `cjs` branch.`

* Framework: `koa`
* Process manager: `pm2`
* Transpiler: `babel`

## Requirements

* node: `>=v14.15.4`
* pm2: `$ npm i -g pm2`

You can create a `.env` file containing environment variables in the root directory of project, which is then accessible through `process.env`.

## Start

```sh
# Install Dependencies
npm i

# Development
npm run start
npm run debug

# Production
npm run build
npm run server
```

## Features

* use ES module
* Framework: `koa`
* Process manager: `pm2`
* Transpiler: `babel`
* Linter: `eslint`, `perttier`

## License

[MIT License](/LICENSE)
