function updateAccount(product, cb) {
    setTimeout(() => {
        console.log(product + " purchased");
        cb();
    }, 2000)
}


function promiseupdateAccount(product){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve();
        },1000)
    })    
}


module.exports = {
    updateAccount: updateAccount,
    promiseupdateAccount: promiseupdateAccount
}
