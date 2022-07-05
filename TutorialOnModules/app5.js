//FileSystem modules pt.2
const fs=require("fs");
fs.mkdir("tutorial5",(err)=>{
  if(err)
  console.log(err);
  else{
    fs.writeFile('./tutorial5/example5.txt',123,(err)=>{
      if(err)
      console.log(err);
      else{
        console.log('successfully created');
      }
    })
}

})
