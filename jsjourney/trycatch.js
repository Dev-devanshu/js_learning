

function divide(a,b){
    try{
        if (b==0){
            throw error("kuch gadbad hai re baba");
        }
        console.log(a/b)
    }
    catch(err){
    
        console.error(err)
    }
}
divide(12,13)