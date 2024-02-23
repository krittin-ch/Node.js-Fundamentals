const path = require('path') // \
console.log(path.sep)

// obtaining file name
const fileName = path.join('./test.txt') // test.txt
console.log(fileName)

// obtaining file path
const filePath = path.join('/content/', 'subfolder', 'test.txt') // \content\subfolder\test.txt
console.log(filePath)

const base = path.basename(filePath) // test.txt
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // C:\Users\kritt\Documents\GitHub\Node.js-Fundamentals\Introduction\content\subfolder\test.txt
// const absolute = path.resolve(__dirname, 'test.txt')  // C:\Users\kritt\Documents\GitHub\Node.js-Fundamentals\Introduction\test.txt
console.log(absolute)