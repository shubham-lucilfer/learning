const event = require("events")

var eventEmitter = new event.EventEmitter();

var connectHandler = function connected(){
    console.log("Connected");
    //triggering one event more
    eventEmitter.emit("data_recieved");
}

eventEmitter.on("connection",connectHandler);

eventEmitter.on("data_recieved", function(){
    console.log("data recieved successfully");
})


//triggering event names connection
eventEmitter.emit("connection")