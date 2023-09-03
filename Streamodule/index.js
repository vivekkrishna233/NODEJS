const fs =require('fs');

const http = require('http')

const server = http.createServer();

server.on('request',(req,res)=>{
    // fs.readFile('./input.txt',(err,data)=>{
    //     if(err) {
    //         return console.error(err);
    //     }else{
    //         res.end(data.toString());
    //     }
    // })

    // const rstream =fs.createReadStream('input.txt');

    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })

    const rstream =fs.createReadStream('input.txt');
    rstream.pipe(res);
    
})


server.listen(8080,"127.0.0.1",()=>{
    console.log('request accepted');
});