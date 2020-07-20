const EventEmitter = require("events");
const emitter = new EventEmitter.EventEmitter();

class Logger extends EventEmitter{

    log(message)
    {
        console.log("logging the message using Logger class" + message);

        this.emit("messageLogged", {id:1, url : "https://om.thapa/test"});
    }
    
}

module.exports = Logger;