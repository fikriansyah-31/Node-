const http = require('http');

const routes = require('../Node/routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000)