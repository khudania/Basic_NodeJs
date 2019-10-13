const http = require('http')
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In middleware')
    next() //Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('In 2 middleware')

})

const server = http.createServer(app)
server.listen(3000)




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


