const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Setup
const app = express();

const port = process.env['WEB_APP_PORT'] || 9999;
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: "/",
  serverSideRender: true,
  watchOptions: {
    // Due to iOS devices memory constraints
    // disabling file watching is recommended 
    ignored: /.*/
  }
});
app.use(middleware);
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.use(createProxyMiddleware({ target: 'https://pantao.ink/', changeOrigin: true }));

// Launch app
app.listen(port, () => {
  console.log(
    'Launching app... http://localhost:' + port + '\n'
  );
});

// Register app and middleware. Required for better
// performance when running from play.js
try { pjs.register(app, middleware); } catch (error) { }
