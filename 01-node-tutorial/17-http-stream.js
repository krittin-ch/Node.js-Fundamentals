var http = require('http');
var fs = require('fs');

const port = '5000'
    
const server = http.createServer(function (req, res) {

    // Read file in chucks (many smaller file)
    const fileStream = fs.createReadStream('Introduction/content/big.txt');
    // 'fileStream' is a readable stream (read as chucks)
    fileStream.on('open', () => {
        // 'fileStream.pipe(res) convert to writable stream and send to res
        fileStream.pipe(res) // 'pipe' can call on a readable stream, allowing to b sent data from the readable stream to a writable stream
    });
    fileStream.on('error', (err) => {
        res.end(err);
    });

    // Below method send the large file at once, very difficult for all users
    // const text = fs.readFileSync('Introduction/content/big.txt');
    // res.end(text)

})

server.listen(port);