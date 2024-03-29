
// ye call bind apply teen tarike function ko call krne ke liye kis bhi object ko this mankar 
const object={name:"harsh"}
function abc(){
    console.log(this)
}
abc.call(object)

const object={name:"harsh"}
function abc(a,b,c){
    console.log(this,a,b,c)
}
abc.apply(object,[1,2,3])

const object={name:"harsh"}
function abc(){
    console.log(this)
}
 const thodidermechalna=abc.bind(object)
 thodidermechalna()


