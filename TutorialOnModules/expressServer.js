const express=require('express');
const path=require('path');
const app=express();

app.use('/public',express.static(path.join(__dirname,'tutorial5')));
app.get('/',(req,res)=>{
  //res.send('Hello World');
  res.send(path.join(__dirname,'tutorial5','a.txt'));
});
app.listen('3000');

app.get('/:name/:age',(req,res)=>{
  console.log(req.params);
  res.send('example with route params');
  res.send(req.params.name+" : "+req.params.age);
});
