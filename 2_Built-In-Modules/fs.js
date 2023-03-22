//-------------------------------------------------------SYNC----------------------------------------------------

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./0_Content/first.txt', 'utf8')
const second = readFileSync('./0_Content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./0_Content/result_sync.txt', `Here is the result: ${first} and ${second}`, { flag: "a" })

//------------------------------------------------------ASYNC----------------------------------------------------

const { readFile, writeFile } = require('fs');

readFile('./0_Content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const third = result
    readFile('./0_content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const fourth=result;
        writeFile('./0_Content/result_async.txt',`Here is the th async result ${third},${fourth}`,(err,result)=>{
            if(err) console.log(err)
            console.log(result)
        })
    })

})