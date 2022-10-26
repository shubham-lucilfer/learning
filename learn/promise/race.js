let p1 = new Promise(function (resolve, reject) {
    setTimeout(()=>{
        resolve("Promise 1 is resolved")
    },500)
})

let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Promise 2 is resolved")
        
    }, 1000);
})




Promise.race([p1, p2]).then((arr)=>{
    console.log(arr);
}).catch((error)=>{
    console.log(error);
})