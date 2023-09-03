const EventEmitter = require('events');


const event = new EventEmitter();


event.on('sayMyName',()=>{
    console.log('your name is vinode');
})

event.emit('sayMyName');