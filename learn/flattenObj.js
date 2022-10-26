let obj = {
    name: "Shubham",
    age: 20,

    address: {
        city: {
            state: 'Delhi',
        },
        pincode: 110084
    }
}

// function flatten(obj, parent, res = {}) {
//     for (let key in obj) {
//         let propName = parent ? parent + '_' + key : key;
//         if (typeof obj[key] == 'object') {
//             flatten(obj[key], propName, res)
//         } else {
//             res[propName] = obj[key];
//         }
//     }
//     return res;
// }


function flatten(obj, parent, res = {}){
    for(let key in obj){
        let propName = parent ? parent + '_' + key : key;
        if(typeof obj[key] == 'object'){
            flatten(obj[key], propName, res);
        }else{
            res[propName] = obj[key];
        }
    }
    return res
}

// console.log(flatten(obj));

console.log(Object.keys(obj))