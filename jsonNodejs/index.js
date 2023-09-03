const fs =require('fs');
const bioData =  {
    name:"vivek",
    age : 21,
    role : "ASE"
}

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);

const jsonData = JSON.stringify(bioData);

fs.writeFile('Data.json',jsonData,(err)=>{
    console.log('done');
});

fs.readFile('./Data.json','utf-8',(err,data)=>{
    const objData =JSON.parse(data);
    console.log(objData);
})