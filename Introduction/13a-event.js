// first event loop
const { readFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH
readFile('./Introduction/content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed a first task')
})

console.log('starting next task')