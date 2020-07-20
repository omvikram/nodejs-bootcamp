//Accessing Module Class/Functions 
const sayHello = require('./mymodule.js');
console.log("Using node module.. ",);
sayHello.moduleFunction();

const path = require('path');
//path & os operation
console.log("Using path module..")
console.log(path.parse(__filename));

const os = require('os');
console.log("Using os module.. ");
console.log(`Total Memory ${os.totalmem()}`);
console.log(`Free Memory ${os.freemem()}`);

const fs = require('fs');
console.log("Using fs module.. ");
console.log(`List of file in current directory ${fs.readdirSync("./")}`);

//File I/O operation
fs.readdir("./", function(err, files){
  if(err) console.log("Error ", err);
  if(files) console.log(`List of file in current directory ${files}`);
})

//Event Emitter Class
const EventEmitter = require("events");
const emitter = new EventEmitter.EventEmitter(); 

console.log("Using emitter listener.. ");
//Event listener
emitter.addListener("testEvent", function(args){
console.log('Event is captured here', args)
})

console.log("Using emitter emit.. ");
emitter.emit("testEvent", {id:1, url:"abc"});

//EventEmitter pub sub
const Logger = require("./mylogger");
const logger = new Logger();

logger.addListener("messageLogged", function(args){
  console.log(`Here is what i have received from the Logger event ${args.id} && ${args.url}`);
})

logger.log("--Using Logger class as EventEmitter--");
