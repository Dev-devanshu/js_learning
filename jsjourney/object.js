// object ek tarika hai jisme hum ek identity ki details ko ek sath rakh sakte hai 

// const obj={
//     name:"devanshu",
//     age:23,
//     eduction:"software engineer"
// }
// console.log(obj)

const func = (function(a){
    delete a;
    return a;
  })(5);
  
  console.log(func);