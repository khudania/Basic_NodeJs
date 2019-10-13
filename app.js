
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')

const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page Not Found</h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})



app.listen(3000);





// ------------------------------------------------------------------

// const http = require('http')
// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use((req, res, next) => {
//     console.log('In middleware')
//     next() //Allows the request to continue to the next middleware in line
// })

// app.use('/', (req, res, next) => {
//     console.log('This always Runs!')
//     next()
// })

// app.use('/add-product', (req, res, next) => {
    // console.log('In middleware')
   // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>')
// })

// app.post('/product', (req, res, next) => {
//     console.log(req.body)
//     res.redirect('/')
// })

// app.use('/', (req, res, next) => {
    // console.log('In middleware')
//     res.send('<h1>Hello From Express</h1>')
// })

// app.listen(3000);

// const server = http.createServer(app)
// server.listen(3000)


// ---------------------------------------------------------------

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


