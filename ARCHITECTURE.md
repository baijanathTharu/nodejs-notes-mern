# Architecture of NodeJs

- Most of the core API of NodeJs are based upon [idiomatic asynchronous event-driven architecture](https://nodejs.org/docs/latest-v12.x/api/events.html).

- In this architecture:
  - Certain kinds of objects called 'emitter' emit named events.
  - There are another kinds of objects(functions) called 'listeners' which listen those named events.
  - When the events occur, the listeners are called.
- Examples of emitters: **_net.server_** object emits an event when someone connects to it, **_fs.ReadStream_** emits an event whenever a file is opened etc

- All the objects that emit events are instances of **_EventEmitter_** class.

- Emitters expose a function called **_eventEmitter.on()_**(a listener) and one or more function can be attached to this listener.

## An example of a custom event

```js
const EventEmitter  = require('events);

class customEmitter extends EventEmitter {

}

const myEmitter = new customEmitter();

// A listener
// myEmitter instance has eventEmitter.on() for listening
myEmitter.on('myEventName', function() {
  console.log('This is a custom event.')
})

// A emitter
// myEmitter instance has eventEmitter.emit() for emitting
myEmitter.emit('myEventName');
```

- Here we required the events module.
- Made our customEmitter class which inherits from **_EventEmitter_** class.
- Made an instance of customEmitter and called it **_myEmitter_**.
- By inheriting from **_EventEmitter_** class, our **_customEmitter_** has **_.on_** and **_.emit_** methods which can be used to make a listener and emitter respectively.
