let arr = [1, [2, 3], [4, [6, [7, 8]]]];

let fn = (arr) => {
    let ans = arr.reduce((acc, ele)=>{
        if(Array.isArray(ele)){
            acc = acc.concat(fn(ele))
        }else{
            acc.push(ele);
        }
        return acc;
    },[])
    return ans;
}



let o1 = {
    name:"Shubham"
}

let o2 = {
    class:12,
    name:"Chrollo",
    __proto__:o1
}

console.log(o2.name)