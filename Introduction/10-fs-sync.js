const {readFileSync, writeFileSync} = require('fs')

// read files
const first = readFileSync('Introduction/content/first.txt', 'utf-8') // utf-8 converts Buffer to human-readable string
const second = readFileSync('Introduction/content/second.txt', 'utf-8')
console.log(first, second)

// write file
writeFileSync(
    'Introduction/content/subfolder/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag :'a'} // node will append the text file
    )