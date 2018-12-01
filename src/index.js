const http = require('http');
const fortune = require('fortune');
const fortuneHTTP = require('fortune-http');
const jsonApiSerializer = require('fortune-json-api')
const Data = require('./data');
const entities = require('./entities'); // TODO: Abstract

const store = new Data(entities).store;
const listener = fortuneHTTP(store, {
  serializers: [
    [jsonApiSerializer]
  ]
});

const server = http.createServer((request, response) =>
  listener(request, response)
  .catch(err => {
    console.log(err);
  }));

server.listen(process.env['SERVER_PORT'], process.env['SERVER_HOST'], () => {
  console.log(`Server created, HOST: ${process.env['SERVER_HOST']} PORT: ${process.env['SERVER_PORT']}`);
});
