// let counter = 0;
// let intervalId

// function sayHi(){
//     counter++;
//     console.log("Hi");
//     if(counter >= 3){
//         clearInterval(intervalId)
//     }
// }

// intervalId = setInterval(sayHi,2000)

function createSetInterval() {

    let intervalId = 0;
    let intervalMap = {}

    function setIntervalPolyfill(callback, delay = 0, ...args) {
        var id = intervalId++;
        function repeat() {
            intervalMap[id] = setTimeout(() => {
                callback(...args);
                if (intervalMap[id]) {
                    repeat();
                }
            }, delay)
        }
        repeat();

        return id;
    }

    function clearIntervalPolyfill(id) {
        clearTimeout(intervalMap[id]);
        delete intervalMap(id)
    }

    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}

const {
    setIntervalPolyfill,
    clearIntervalPolyfill
} = createSetInterval


let count = 0;

function g(id) {
    count++;
    console.log("mine");
    if(count ==4){
        clearIntervalPolyfill(id)
    }
}

setIntervalPolyfill(g,2000)
