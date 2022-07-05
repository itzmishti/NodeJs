//Event Module
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('tutorial',(n1,n2)=>{
  console.log(n1+n2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
  constructor(name){
    super();
    this._name=name;
  }
  get name(){
    return  this._name;
  }

}
let pedro=new Person('Pedro');
pedro.on('name',()=>{
  console.log('my name is '+pedro.name);
})
pedro.emit('name');

let chris=new Person('chris');
chris.on('name',()=>
{
  console.log('my name is '+chris.name);
})
chris.emit('name');
