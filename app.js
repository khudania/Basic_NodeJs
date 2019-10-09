const http = require('http');

// function rqListner(req, res) {
//     console.log('Hello')
// }

// http.createServer(rqListner);

// http.createServer(function(req, res) {

// });

const server = http.createServer((req, res) => {
    console.log(req);
})

server.listen(3000);