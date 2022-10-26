// setTimeout(function(){
//     console.log(1);
// })

// setTimeout(function(){
//     console.log(2);
// })

// let p = new Promise((resolve, reject) =>{
//     resolve();
// })

// console.log(3);

// p.then(()=>{
//     console.log(4);
// })

// p.then(() =>{
//     console.log(5);
// })


// setTimeout(()=>{
//  console.log(6);   
// })


// let p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         reject("Some error 1")
//     },3000)
//     setTimeout(() => {
//         reject("Some error 2")
//     },2000)
//     setTimeout(() => {
//         reject("Some error 3")
//     },1000)
// });

// p.then(null,function (err){
//     console.log(1);
//     console.log(err);
// }).catch(function(err){
//     console.log(2);
//     console.log(err);
// })

function delay(ms){
    return new Promise(resolve => setInterval(resolve,ms))
}

delay(3000).then(()=>console.log('runs after 3 seconds'));