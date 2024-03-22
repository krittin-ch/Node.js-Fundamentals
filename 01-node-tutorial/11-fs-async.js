const {readFile, writeFile} = require('fs')

console.log('start')
readFile('Introduction/content/first.txt', 'utf-8', (err,result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('Introduction/content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            'Introduction/content/result-sync.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})

console.log('starting next task')

// results
// start
// starting next task
// done with this task

// The task is starting while the current task is still operating