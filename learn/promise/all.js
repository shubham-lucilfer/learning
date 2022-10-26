let p1 = new Promise(function (resolve, reject) {
    resolve("Promise 1 is resolved")
})

let p2 = new Promise(function (resolve, reject) {
    resolve("Promise 2 is resolved")
})

let p3 = new Promise(function (resolve, reject) {
    resolve("Promise 3 is resolved")
})


let pall = Promise.all([p1, p2, p3]);
pall.then((arr)=>{
    console.log(arr);
}).catch((error)=>{
    console.log(error)
})