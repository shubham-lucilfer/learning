const fs = require("fs")

console.log("before");

fs.readFile('f1.txt',cb);

function cb(error, data){
    console.log(data+"");
    fs.readFile('f2.txt',cb1);
    function cb1(error, data){
        
        console.log(data+"");
        fs.readFile('f3.txt',cb2);
            function cb2(error, data){
                console.log(data+"");
            
        }
    }
}



console.log("after")