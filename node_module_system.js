// We Create an object of File System class using require.
const fs = require('fs')
// Using the fs object we call the function writeFileSync to create a new File named as test.txt
fs.writeFileSync('test.txt', 'I am Soham Thaker')