// GLOBALS      - NO WINDOW

// __dirname    - Path to current directory
// __filname    - Function to use modules (CommonJS)
// require      - Info about current module (file)
// process      - Info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)