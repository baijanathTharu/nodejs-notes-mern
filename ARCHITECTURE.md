# Architecture of NodeJs

## Event Driven Architecture

- Most of nodejs core modules are built around event driven architecture.
- There are event emitters which emit named events and there are event listners that listen emitted events.
- Whenever a new event is emitted, a callback is executed.
- Example:

```js
const server = require("http").createServer();
// a request listener
server.on("request", (req, res) => {
  res.end("Request received.");
});
```

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

## What's inside Nodejs?

### V8 engine:

- for converting javascript code to machine code

### libuv:

- for asynchronous IO
- Give node access to computer's underlying system such as files ystem, networking etc
- It also implements event loop and thread pool. (event loop for doing simpler tasks like running call backs and thread pool for heavy tasks like file access, compression etc)

#### Threads and Thread Pool

- A process is a program in execution.
- A thread is a program that executes instruction.
- A node application runs in a single thread.
- **Sequence of Execution**
  - Initialize program
  - Execute top level code
  - Require modules
  - Register event callbacks
  - Start event loop: It is where most of the task are done but some task are heavy and they can block the single thread and require **offloading**. In this case, thread pool are used.
  - Thread Pool: Additional 4 threads are provided to node by libuv library. Expensive tasks are given to thread pool automatically by nodejs.
- Heavy tasks: File system APIs, Cryptography, Compression, Hashing etc

#### Event Loop

- Heart of nodejs
- All application code inside callback functions(non top level code) executed by event loop. However some part might be offloaded.
- Nodejs is built around callback functions.
- It has **event driven architecture**
  - Events are emitted. (new http request, timer expired, finished file loading)
  - Event loop picks them up.
  - Callbacks are called.
- **Important Phases of Event Loop**
  - Expired timer callbacks
  - I/O polling and callbacks: polling means looking for new I/O events ready for processing
  - setImmediate callbacks
  - closed callbacks: for closed events such as when a socket shuts down.
- This completes one cycle of event loop called tick.
- If there are any pending timers or I/O tasks then the loop continues again otherwise the program exits.

#### Don't Block Event Loop

- Don't use sync functions in fs, crypto and zlib modules in callback functions
- Don't perform complex calculations(e.g. loops inside loops)
- Be careful with JSON in large objects
- Don't use too complex regular expressions(e.g. nested quantifiers)
