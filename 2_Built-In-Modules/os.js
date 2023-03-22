let os=require('os')

let user=os.userInfo()
console.log(user)

console.log(`system is up from last ${os.uptime()} seconds`)