Array.prototype.myMap = function(cb){
    let arr = [];
    for(let i = 0; i < this.length; i++){
        arr.push(cb(this[i]));
    }
    return arr;
}

Array.prototype.myFilter = function(cb){
    let arr = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i]))
        arr.push(this[i]);
    }
    return arr;
}

Array.prototype.customReduce = function(cb,initialValue){
    let accumulator;
    if(initialValue == null){
        accumulator = this[0];
        for(let i = 1; i < this.length; i++){
            accumulator = cb(accumulator, this[i])
        }
    }else{
        accumulator = initialValue
        for(let i = 0; i < this.length; i++){
            accumulator = cb(accumulator, this[i])
        }
    }

    return accumulator
}
