const http =  require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const data =  fs.readFileSync('./api.json',"utf-8",);
    const obj =JSON.parse(data);

    // console.log(req.url);
    if(req.url == "/"){
    res.end('Helow , server created ');
    }else if(req.url == "/about"){
        res.end('associate software engineer @ inoart ');
    }else if(req.url == "/contact"){
        res.end('email id: vivekkrishna233@gmail.com');
    }else if(req.url == "/userapi"){
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(obj[1].first_name);
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>page error 404</h1>")
    }

})

server.listen(8080,"127.0.0.1",()=>{
    console.log('request accepted');
});