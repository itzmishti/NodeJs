const fs=require('fs');
const zlib=require('zlib');
const gzip=zlib.createGzip();
const gunzip=zlib.createGunzip();

const readStream=fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('example62.txt.gz');
//Way -1
// readSream.on('data',(chunk)=>{
//   writeStream.write(chunk);
// });
//Way 2:Using pipes
readStream.pipe(gzip).pipe(writeStream);//compressing a file before writing
//readStream.pipe(gunzip).pipe(writeStream);//for unzipping
