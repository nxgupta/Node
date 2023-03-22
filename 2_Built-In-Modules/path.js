const path= require('path');

//path seperator
console.log(path.sep)

//create a path by joining
const filePath=path.join('/content/','subfolder','node.txt')
console.log(filePath)

//Base name
const base=path.basename(filePath)
console.log(base)

//Absolute path
const absolute=path.resolve(__dirname,'path.js')
console.log(absolute)
