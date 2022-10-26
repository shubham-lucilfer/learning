const fs = require("fs")

// let content = '';

// let readStream  = fs.createReadStream("input.txt");

// readStream.on('data',function(chunk){
//     content+=chunk;
//     console.log("Chunk is recieved")
// })

// readStream.on('end',function(chunk){
//     // console.log(content+"");
//     console.log("data is recieved")
// })


// let data = "I love coding"


// let writeStream = fs.createWriteStream("output.txt")

// writeStream.write(data,"utf-8");
// writeStream.end()

// writeStream.on("finish",function(){
//     console.log( "writing done" )
// })


//pipe
let readStream = fs.createReadStream("input.txt");
let writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
