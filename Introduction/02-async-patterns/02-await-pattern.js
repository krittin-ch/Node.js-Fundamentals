/*
// Method 1
const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path,'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('./Introduction/content/first.txt')
.then(result => console.log(result))
.catch((err) => console.log(err))

const start = async () => {
    try {
        const first = await getText('./Introduction/content/first.txt')
        const second = await getText('./Introduction/content/second.txt')
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
*/

/*
// Method 2

const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./Introduction/content/first.txt', 'utf-8')
        const second = await readFilePromise('./Introduction/content/second.txt', 'utf-8')
        await writeFilePromise(
            './Introduction/content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`
            )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
*/

/*
// Method 3 [The most readable method]
const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./Introduction/content/first.txt', 'utf-8')
        const second = await readFile('./Introduction/content/second.txt', 'utf-8')
        await writeFile(
            './Introduction/content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first}, ${second}`
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
*/