
let count = 0;
function getData(){
    console.log("Fetching data", count++);
}



function debounce(call ,d){
    let timer;
    return function(...args){
        if(timer) 
        clearTimeout(timer);
        timer = setTimeout(()=>{
            call(); 
        },d)
    }
}

const betterfunction = debounce(getData, 1000);

document.getElementById('btn').addEventListener('click',betterfunction)

// String.prototype[Symbol.iterator] = function(){
//     let len = this.length

//     return{
//         next(){
//                 if(len > 0){
//                     len--;
//                     return{done:false,value:"hey"}
//                 }else{
//                     return{done:true}
//                 }
//         }
//     }
// }
// console.log([..."hello"])

// function range(start = 1, end = 10, step = 1){
//     let curr = start;
//     return{
//         [Symbol.iterator]:function(){
//             return{
//                 next(){
//                     let result
//                     if(curr <= end){
//                         result = {done:false, value: curr}
//                         curr+=step
//                         return result
//                     }else{
//                         return {done:true}
//                     }
//                 }
//             }
//         }
//     }
// }

// function iterator(arr){
//     let nextNum = 0;
//     return{
//         next(){
//             if(nextNum < arr.length)
//             return{value:arr[nextNum++],done:false};
//             else return {done:true}
//         }

//     }
// }


