// Streams is applied to deal with the continuous data or large data

const { createReadStream } = require('fs');

const stream = createReadStream('./Introduction/content/big.txt', { 
    highWaterMark: 90000, // set to 90000 bytes per chuck
    encoding: 'utf-8'
});

// default 64 kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./Introduction/content/big.txt', { highWaterMark: 90000 })
// const strea = createReadStream('./Introduction/content/big.txt', { encoding: 'utf-8' }) 

stream.on('data', (result) => {
    console.log(result);
    /*
    Default readStream

    The file size is 169 kByte and that's why it read separaately into 3 chucks
    <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 30 0a 48 65 6c
    6c 6f 20 57 6f 72 6c 64 20 31 0a 48 65 6c 6c 6f 20 57 6f 72
    6c 64 20 32 0a 48 65 6c 6c 6f 20 57 6f ... 65486 more bytes>            1 chuck = 65486 = 64 kByte
    
    <Buffer 57 6f 72 6c 64 20 33 39 32 30 0a 48 65 6c 6c 6f 20 57
    6f 72 6c 64 20 33 39 32 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c
    64 20 33 39 32 32 0a 48 65 6c 6c 6f ... 65486 more bytes>               1 chuck = 65486 = 64 kByte
    
    <Buffer 6f 72 6c 64 20 37 37 37 35 0a 48 65 6c 6c 6f 20
    57 6f 72 6c 64 20 37 37 37 36 0a 48 65 6c 6c 6f 20 57 6f
    72 6c 64 20 37 37 37 37 0a 48 65 6c 6c 6f 20 ... 37768 more bytes>      remaining chuck = 32 kByte (approx 41 kByte)
    */
})

stream.on('error', (err) => {
    console.log(err);
})

// // Normal readFileSync
// const { readFileSync } = require('fs')
// const bigFile = readFileSync('./Introduction/content/big.txt');
// console.log(bigFile)

// /*
// Total of 169 kByte

// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 30 0a 48 65 6c
// 6c 6f 20 57 6f 72 6c 64 20 31 0a 48 65 6c 6c 6f 20 57 6f 72
// 6c 64 20 32 0a 48 65 6c 6c 6f 20 57 6f ... 168840 more bytes>
// */