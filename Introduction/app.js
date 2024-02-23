const {readFile, writeFile} = require('fs')

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
        writeFile('Introduction/content/result-sync.txt',
        `Here is the result: ${first}, ${second}`,
        (err, result, a, b) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
            console.log(a)
            console.log(b)
        }
        )
    })
})