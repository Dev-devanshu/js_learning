// clouser ka mtlb kya hai 
// ek esa function jo dusre function ko retrun kare :---


// function abc(){
//     let ans=12;
//     return function(){
//         console.log(ans);
//     }
// }
// let ans =abc()
// ans()

function timer(){
    var a =23;
    return setTimeout(function(){
         console.log(a)
    },2000)
}
var ans=timer()
ans();