# Event Driven Architecture

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
