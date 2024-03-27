// HTTP Methods
// GET - get all orders
// POST - place an order (send data)
// GET - get single order (path params)
// PUT - update specific order (params + send data)
// DELETE - delete order (path params)

const { readFileSync } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    // home page
    console.log(req.url)
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'}) // statusCode = 200 and html type
        // res.writeHead(200, {'content-type': 'text/plain'}) // statusCode = 200 and plain text type
        res.write('<h1>Home Page</h1>');
        res.end();  // always have this line (to create the http cycle)
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'}) // statusCode = 200 and html type
        // res.writeHead(200, {'content-type': 'text/plain'}) // statusCode = 200 and plain text type
        res.write('<h1>About Page</h1>');
        res.end();  // always have this line (to create the http cycle)    
    }
    // 404
    else {
        res.writeHead(200, {'content-type': 'text/html'}) // statusCode = 200 and html type
        // res.writeHead(200, {'content-type': 'text/plain'}) // statusCode = 200 and plain text type
        res.write('<h1>Page Not Found </h1>');
        res.end();  // always have this line (to create the http cycle)    
    }
});

server.listen(5000);