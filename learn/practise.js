// Array.prototype.myMap = function (cb) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i]));
//     }
//     return arr;
// }

const { resolve } = require("path");

// Array.prototype.myFilter = function (cb) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i]))
//             arr.push(this[i])
//     }
//     return arr;
// }

// Array.prototype.myReduce = function (cb, initialValue) {
//     let accumulator;
//     if (initialValue == null) {
//         accumulator = this[0];
//         for (let i = 1; i < this.length; i++) {
//             accumulator = cb(accumulator,this[i]);
//         }
//     }else{
//         accumulator = initialValue
//         for(let i = 0; i < this.length; i++){
//             accumulator = cb(accumulator, this[i]);
//         }
//     }


//     return accumulator;
// }

// let arr = [1, 2, 3, 4,5];
// console.log(arr.myMap((ele) => {
//     return ele * 2;
// }))

// console.log(arr.myFilter((ele) => {
//     return ele > 2;
// }))


// let ans = arr.myReduce((acc, ele)=>{
//     return acc + ele;
// },0)

//memoisation
let sum = 0;
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}


const memo = (fun) => {
    let cache = {}
    return function (...args) {
        let n = args[0];
        if (n in cache) {
            return cache[n];
        } else {
            let ans = fun(n);
            cache[n] = ans;
            return ans;
        }
    }
}

// const eff = memo(calc);

// console.time()
// console.log(eff(5))
// console.timeEnd();
// console.time()
// console.log(eff(5))



function flatten(arr) {
    let ans = arr.reduce((acc, ele) => {
        if (Array.isArray(ele)) {
            acc = acc.concat(flatten(ele))
        } else {
            acc.push(ele);
        }
        return acc;
    }, [])
    return ans;
}

// console.log(flatten([1,[2,3],[4,5,[7,8,9]]]))

// console.timeEnd();

let name = {
    first: "Shubham",
    last: "Gupta",
    printFullName: function (hometown, state) {
        console.log(this.first + " " + this.last, " " + hometown, " ", state);
    }
}

let name1 = {
    first: "Shilpi",
    last: "Kumari",
}
let printFullName = function (hometown, state) {
    console.log(this.first + " " + this.last, " " + hometown, " ", state);
}
//polyfill in bind

Function.prototype.myBind = function (...args) {
    let fun = this
    let rest = args.slice(1);
    // console.log(args);
    return function () {
        fun.apply(args[0], rest);
    }
}

let x = printFullName.myBind(name1, "delhi", "Bihar")


//currying

//  let multiply = function(x){
//         return function(y){
//             return x * y;
//         }
//  }

// let s = function(a){
//     return function(b){
//         if(b){
//             return s(a + b);
//         }
//         return a;
//     }
// }

// console.log(s(1)(2)(3)(4)())


// console.log("start")

// const sub = Promise.resolve("I am shubham")
// sub.then((res) => {
//     console.log(res)
// })

// console.log("Stop")

//Promise Polyfill

