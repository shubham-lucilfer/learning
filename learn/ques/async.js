// async function inc(x){
//     x  = x + await + 1;
//     return x;
// }

// async function increment (x){
//     x = x + 1;
//     return x;
// }

// inc(1).then((x)=>{
//     increment(x).then((x)=>{
//         console.log(x);
//     })
// })



// async function f1(){
//     console.log(1)
// }

// async function f1(){
//     console.log(2)
// }

// console.log(3);
// f1();
// console.log(4)
// f2();

// async function f2(){
//     console.log("Lets go");
// }

function resolveAfterNseconds(n, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, n)
    })
}

(function () {
    let a = resolveAfterNseconds(1000, 1)
    a.then(async function (x) {
        let y = await resolveAfterNseconds(2000, 2);
        let z = await resolveAfterNseconds(1000, 3);
        let p = resolveAfterNseconds(2000, 4);
        let q = resolveAfterNseconds(1000, 5);
        console.log(x + y + z + await p + await p);
    })
})();


