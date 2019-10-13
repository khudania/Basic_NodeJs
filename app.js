// const http = require('http');

// const routes = require('./routes');
// const fs = require('fs');

// function rqListner(req, res) {
//     console.log('Hello')
// }

// http.createServer(rqListner);

// http.createServer(function(req, res) {

// });

// const server = http.createServer(routes);

// const server = http.createServer((req, res) => {
// console.log(req.url, req.method, req.headers);

// const url = req.url;
// const method = req.method;



// });

// server.listen(3000);


const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
