const fs=require('fs');
const readSream=fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('example3.txt');
readSream.on('data',(chunk)=>{
  writeStream.write(chunk);
  console.log(chunk);
});
