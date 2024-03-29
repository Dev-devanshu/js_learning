

// let parent=document.querySelector(".parent")
// parent.addEventListener("click",function(event){
// if(event.target.id==="play"){
//     console.log("playsongs");
// }
// else if(event.target.id==="pause"){
//     console.log("pause songs");
// }

// }) 

let  parent=document.querySelector("#parent")
parent.addEventListener("click",function(event){
    if(event.target.id==="play"){
        console.log("play songs")
    }else if(event.target.id==="pause"){
        console.log("pause song")
    }
})