const sum=(num1,num2)=>num1+num2;
const PI=3.114;
class MyClass{
  constructor(){
    console.log('object created');
  }
};
// module.exports.sum=sum;
// module.exports.PI=PI;
// module.exports.MyClass=MyClass;
module.exports={sum:sum,PI:PI,MyClass:MyClass};
