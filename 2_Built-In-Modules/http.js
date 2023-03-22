let http=require('http');
let server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('you have hit the homepage')
        return;
    }
    if(req.url==='/about'){
        res.end('you have git the about page')
        return;
    }
    res.end
    (
        `<h1>Oops!!!</h1>
        <p>you have hit the wrong path</p>
        return to <a href='/'>homePage</a>
        `
    )
}).listen(5000)