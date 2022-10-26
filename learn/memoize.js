let sum = 0;
const clumsy = (num1) => {
    for(let i = 1; i <= num1; i++){
        sum += i
    }
    return sum;
}

function memo(fn){
    const res = {};
    return function(...args){
        let n = args[0];
        if(n in res){
            console.log("from cache")
            return res[n];
        }else{
            console.log("first time")
            let val = fn(n)
            res[n] = val;
            return val
        }
    }
}
