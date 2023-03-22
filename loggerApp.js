let logger=require('./1. Intro/logger')
let names=require('./1. Intro/names')
function details() {
    console.log(__dirname)
    console.log(__filename)
}
details()
logger(names.neer);
logger(names.vishal);

