# Koa service

This project uses ES module by default, if you want to use CommonJs module you can switch to the `cjs` branch.

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
npm run build:watch
npm run start # npm run debug

# Production
npm run build
npm run server
```

## License

[MIT License](/LICENSE)
