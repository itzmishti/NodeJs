//FileSystem Module

const fs=require('fs');
fs.writeFile('example.txt',"This is a dummy file",(err)=>{
  if(err)
  console.log(err);
  else
  {
    console.log('File successfully created');
    //if you don't pput utf8 ,you'll get the string in binary
    fs.readFile('example.txt','utf8',(err,file)=>
    {
      if(err)
      console.log(err);
      else
      console.log(file);
    });

  }
})
// fs.rename('example.txt','example2.txt',(err)=>{
//   if(err)
//   console.log(err);
//   else
//   console.log('Successfully renamed the file');
// });
fs.appendFile('example.txt','Some data is being appended',(err)=>{
  if(err)
  console.log(err);
  else
  console.log('Success it is');
});

fs.unlink('example2.txt',(err)=>{
  if(err)
  console.log(err);
  else
  console.log('Success');
})
