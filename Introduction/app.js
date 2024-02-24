const http = require('http')

const server = http.createServer((req, res) => { // req is for the incoming request from a web browser, and res is for the response, what we are sending back  
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is my short story')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the oage you are looking for</p>
    <a href="/">Back Home</a>
    `)
})

// the server is listening to port 5000
// localhost:5000
server.listen(5000)
