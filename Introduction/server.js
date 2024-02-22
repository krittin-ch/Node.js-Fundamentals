const http = require('node:http')

const hostname = '127.0.0.1'
const port = '5000'

const server = http.createServer((req, res) => {
    res.statusCode = 200 // 200 indicate a successful response
    res.setHeader('Content-Type', 'text/plain')
    // Content-Type indicate the type of media in the body of the HTTP message
    // text/plain makeing everything text. See below for an example
    res.end('Hello World, <h1>I\'m Krittin</h1>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})