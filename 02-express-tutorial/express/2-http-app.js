const { readFileSync } = require('fs');
const http = require('http');

// get all files
const homePage = readFileSync('./02-express-tutorial/navbar-app/index.html');
const homeStyles = readFileSync('./02-express-tutorial/navbar-app/style.css')
const homeImage = readFileSync('./02-express-tutorial/navbar-app/logo.svg')
const homwLogic = readFileSync('./02-express-tutorial/navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    const url = req.url;
    // home page
    console.log(req.url)
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'}) // statusCode = 200 and html type
        // res.writeHead(200, {'content-type': 'text/plain'}) // statusCode = 200 and plain text type
        res.write(homePage);
        res.end();  // always have this line (to create the http cycle)
    }
    // home style
    else if (url === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'}) // statusCode = 200 and html type
        // res.writeHead(200, {'content-type': 'text/plain'}) // statusCode = 200 and plain text type
        res.write(homeStyles);
        res.end();  // always have this line (to create the http cycle)
    }
    // home logo
    else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'}) // statusCode = 200 and html type
        // res.writeHead(200, {'content-type': 'text/plain'}) // statusCode = 200 and plain text type
        res.write(homeImage);
        res.end();  // always have this line (to create the http cycle)
    }
    // home logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'}) // statusCode = 200 and html type
        // res.writeHead(200, {'content-type': 'text/plain'}) // statusCode = 200 and plain text type
        res.write(homwLogic);
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