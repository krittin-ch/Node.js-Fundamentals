const { writeFileSync } = require('fs')

for (let i = 0; i < 10; i++) {
    writeFileSync('Introduction/content/big.txt', `Hello World ${i}\n`, { flag: 'a' })
}