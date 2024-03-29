// async js

// settimeout 
// srtinterval
// fetch-api
// axious(or other http libraries)
// promises 


// ye sab use hi tab kiye jate hai sab hamko 
// kuch esa karna ho  jisme time lagta hai 

// ====  set-timout =---- ye code kuch der bad chalata hai 
// console.log("hey1")
// console.log("hey2")
// setTimeout(() => {
//     console.log("namaste sirji")
    
// }, 1000);
// console.log("okay bye ")

// set-interval====
// set interval ka code kuch der bad chalta hau or bar bar ek particular time me 
// var count=1;
// let newone=setInterval(() => {
//     console.log("this is okay but theek hai ")
//     ++count;
//     console.log(count);
//     if(count===4)
//     clearinterval(newone)
    
// }, 1000);

// fetch-api---
// ye kisii aur url par jakar kuch data lekar ayega or humara pass us url er lekar 
// jayega

// fetch(`https://randomuser.me/api/`)
// .then(raw=>raw.json)
// .then(readable=>console.log(readable.results))


// axious (or other libararies )====
//  ye bhi wahi karta hai jo fetch api karta 
//  bs ye thoda jdaya  devolper freindly hai !!!'

// axios.get(`https://randomuser.me/api/`)
// .then(result=>console.log(result.data.results[0]))



// promise ==== 
//  ye janab ke ander jo code likhoege  vo  ff


//  let hack=new Promise(function(resolve,reject){
// fetch(`https://randomuser.me/api/`)
// .then(raw=>raw.json())
// .then(result=>{
//     if(result.results[0].gender==="male")resolve();
//     else  reject();
// })
// });
// hack
// .then(function(){
//     console.log("okay with this")
// })
// .catch(function(){
//     console.log("this is not done")
// })

// call back function =======>
// call back ek function hai bs simple function hai but iski khass  batt ye hai ki 
// .pass kiyaaa jaaa skta hai as arguments

// function getdata(url,callback){
//     fetch(url)
//     .then(raw=> raw.json())
//     .then(result=>{
//         callback(result)
//     })

// }
// getdata("https://randomuser.me/api/",function(result){
//     console.log(result.results[0].gender,result.results[0].email,result.results[0].name.first)
// })


// async function abcd(){
//     let a =await fetch`https://randomuser.me/api/`
//     a=  await  a.json();
//     console.log(a)
// }
// abcd();


// callback 
// function data(url,callback){
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(result=>{
//         callback(result)

//     })
// }
// data(`https://randomuser.me/api/`,function(result){
//     console.log(result)
// })


// promises 

// function datafetcher(url){
//     const parchi=new Promise((resolve, reject) => {
//         fetch(url)
//         .then(raw=> raw.json())
//         .then(result=>{
//             resolve(result)
//         })
        
//     })
//     return parchi;
// }

// datafetcher("https://randomuser.me/api/")
// .then(function(result){
//     console.log(result)
// })

// async function datafetcher(url){
//     let  data=await fetch(url)
//     let result=await data.json()
//     return result
// }
// function hh(){

// datafetcher("https://randomuser.me/api/");
// console.log(data)

// }
// hh();


// function datafetcher(url){
//     let par= new Promise((resolve,reject)=>{
//         fetch(url)
//         .then(raw=>raw.json())
//         .then(result=>{
//              resolve(result)
//         })

//     })
//     return par;
// }


// genrators---
// function* number(){
//     console.log("okat start")
//     yield 1;
//     console.log("dont with one")
//     yield 2;
//     console.log("done with two")
//     yield 3;
// }
// const ans =number()
// console.log(ans.next().value)
// console.log(ans.next().value)
// console.log(ans.next().value)
// console.log(ans.next().value)



// function * number(){
//     for( let i=0;i<=11;i++){
//         yield i;

//     }
// }   
// let all=number()
// console.log(all.next().value)
// console.log(all.next().value)
// console.log(all.next().value)
// console.log(all.next().value)
// console.log(all.next().value)
