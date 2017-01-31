require('babel-register')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')
const express = require('express')

const SERVER_PORT_NUMBER = process.env.PORT || 8080
const compiler = webpack(config)

var server
if (process.env.NODE_ENV === 'production') {
  server = express()
  server.use(express.static('dist'))
} else {
  server = new webpackDevServer(compiler, {
    contentBase: './dist',
    hot: true
  })
}

server.listen(SERVER_PORT_NUMBER, () => {
  console.log(`server is listening in on ${SERVER_PORT_NUMBER}`)
})