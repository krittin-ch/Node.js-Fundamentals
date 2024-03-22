const {readFileSync, writeFileSync} = require('fs')

// read files
console.log('start')
const first = readFileSync('Introduction/content/first.txt', 'utf-8') // utf-8 converts Buffer to human-readable string
const second = readFileSync('Introduction/content/second.txt', 'utf-8')
// console.log(first, second)

// the system has to run every users (files) before get into new tasks
// write file
writeFileSync(
    'Introduction/content/subfolder/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag :'a'} // node will append the text file
    )

console.log('done with this task')
console.log('starting the next one')

// results
// start
// done with this task
// starting the next one