const lib = require("./lib")


let amount = 2000;
let toCut = 200;
function chargeDebitCard(){
    amount = amount - toCut;
    console.log(`Remaining amount is ${amount}`);
}

let promiseObj = lib.promiseupdateAccount("Tv").then(chargeDebitCard).then(chargeDebitCard); 
