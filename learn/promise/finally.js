function showName(){
    let a = 2;
    return new Promise((resolve, reject)=>{
        if(a <= 2){
            resolve("Resolved yess")
        }else{
            reject("rejected nooo")
        }
    })
}

showName().then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data)
}).finally(()=>{
    console.log("this is finally")
})