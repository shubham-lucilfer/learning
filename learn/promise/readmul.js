const fs = require('fs')

let arr = ["./f1.txt","./f2.txt","./f3.txt"];
console.log("before")


let readFilePromise = fs.promises.readFile(arr[0]);
for(let i = 1; i < arr.length; i++){
    readFilePromise = readFilePromise.then((data)=>{
        console.log(data+"");
        return fs.promises.readFile(arr[i]);
    })
}


readFilePromise.then((data)=>{
    console.log(data+"")
})

console.log("after")