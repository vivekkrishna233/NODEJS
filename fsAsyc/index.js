var fs=require('fs')

//create async file 
// fs.writeFile('read.txt','today is awesome  day',(err)=>{
//     console.log("file created ")
// });

//read async file 

fs.readFile('./read.txt','utf-8',function(err,data){
    console.log(data);
})

