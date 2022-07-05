//Serving static FileSystem
const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
  const readStream=fs.createReadStream('./example.txt');
  res.writeHead(200,{'Content-type':'text/html'});
  readStream.pipe(res);
}).listen(3000);
