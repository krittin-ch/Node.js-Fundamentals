const {readFile} = require('fs')
const { result } = require('lodash')

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

getText('./Introduction/content/fidrst.txt')
.then(result => console.log(result))
.catch((err) => console.log(err))