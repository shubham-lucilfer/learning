const fs = require("fs")

let readPromise1 = fs.promises.readFile('./f1.txt')

function cb1(data) {
    console.log(data+"");
    let readPromise2 = fs.promises.readFile("./f2.txt")
    return readPromise2;
}


function cb2(data) {
    console.log(data+"");
    let readPromise3 = fs.promises.readFile("./f3.txt");
    return readPromise3;
}


function cb3(data) {
    console.log(data+"");
}


readPromise1.then(cb1).then(cb2).then(cb3);
