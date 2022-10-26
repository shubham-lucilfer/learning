// const pending = 0;
// const fulfilled = 1;
// const rejected = 2;

// function customPromise(executor){
//     let state = pending
//     let value = null
//     let handler = []
//     let catcher = []


//     function resolve(result){
//         if(state != pending){
//             return;
//         }
//         state = fulfilled
//         value = result
//         handler.forEach((h)=> h(value))
//     }

//     function reject(error){
//         if(state != pending){
//             return;
//         }

//         state = rejected
//         value = error;
//         catcher.forEach((e)=>e(value));
//     }

//     this.then = function(cb){
//         if(state === fulfilled){
//             cb(value)
//         }else{
//             handler.push(cb)
//         }
//     }

//     this.catch = function(cb){
//         if(state === rejected){
//             cb(value);
//         }else{
//             catcher.push(cb)
//         }
//     }

// executor(resolve, reject);

// }


// const doWork = (res, rej)=>{
//     if(2 != 2){
//         setTimeout(()=>{
//            res("Resolved ur promise")
//         },1000)
//     }else{
//         setTimeout(()=>{
//             rej("Promise rejected")
//         },1000)
//     }
// }

// let greetMessage = new customPromise(doWork);

// greetMessage.then((data)=>{
//     console.log(data)
// })

// greetMessage.catch((error)=>{
//     console.log(error);
// })


const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor) {
    let state = PENDING
    let value = null
    let handler = []
    let catcher = []

    function resolve(res) {
        if (state !== PENDING) return
        state = FULFILLED
        value = res
        handler.forEach((e) => e(value));
    }


    function reject(error) {
        if (state !== PENDING) return
        state = REJECTED
        value = error
        catcher.forEach((e) => e(value));
    }

    this.then = function (successCb) {
        if (state === FULFILLED) {
            successCb(value);
        } else {
            handler.push(successCb);
        }
    }

    this.catch = function (failCb) {
        if (state === REJECTED) {
            failCb(value);
        } else {
            catcher.push(failCb)
        }
    }
    executor(resolve, reject);
}

const work = (resolve, reject)=>{
    if(2 === 2){
        setTimeout(()=>{
            resolve("Resolved")
        },1000)
    }else{
        setTimeout(()=>{
            reject("Rejected")
        },1000)
    }   
}


let greet = new customPromise(work);

greet.then((data)=>{
    console.log(data)
})

greet.catch((err)=>{
    console.log(err);
})