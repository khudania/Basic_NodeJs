const http = require('http');

// function rqListner(req, res) {
//     console.log('Hello')
// }

// http.createServer(rqListner);

// http.createServer(function(req, res) {

// });

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);

    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello World!!</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);