function range(start = 10, end = 20, step = 1) {
    let curr = start;
    return {
        [Symbol.iterator]: function () {
            return {
                next() {
                    let result;
                    if (curr <= end) {
                        result = curr;
                        curr += step;
                        return {
                            value: result, done: false
                        }
                    }
                    return {
                        done: true
                    }
                }
            }
        }
    }

}
console.log([...range()]);
