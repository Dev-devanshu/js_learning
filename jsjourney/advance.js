
//  this keyword is one of the suspensfull in the javascript:
// keyword ka mtlb  hota hai programming me jiska kuch mtlb ho :

// this ki value bar bar change ho skati hai in different condtion agar sari condition smajh jaynge to this ko samjhoege :

// global -- window
// console.log(this)
// function object 
// function  abc(){
//     console.log(this);
// }
// abc();

// method-- object

// var obj1={
//    name: function(){
//         console.log(this.age)   
//         },
//         age:23,
//         email:"okaysendmeo10"
// }
// obj.name();
// fnc inside method (es5)--window

// var obj2={
//     okay:function(){
//         function child(){
// console.log(this.age)               
//         }
//         child();
//     } , 
//     age:23
// }
// obj.okay();
// fnc inside method (es6)--object 

// const obj={
//     yups:function(){
//         const child=()=>{
//             console.log(this)
//         }
//         child();
//     }
// }

// constructor me this ki value : new blank object 
// event listner me this ki value : that event listner jis per even laga ho :
// document.querySelector("button")
// .addEventListener("click",function(){
//     console.log(this)
// })

// document.querySelector("button")
// .addEventListener("click",function(){
//     console.log(this)
// })


