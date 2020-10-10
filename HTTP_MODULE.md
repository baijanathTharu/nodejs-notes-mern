# HTTP

- Make a http server using this module.

## Creating a HTTP server

```js
const http = require("http");

const server = http.createServer(function (request, response) {
  // we get request from the client and
  // developers role is to complete request and response cycle
  response.end("Hello! this is a nodejs server");
});

// listen to a port for requests:
// first argument is port number, second is host name
// third is a callback
server.listen(8080, "localhost", function () {
  console.log("Server started listening to port 8080");
});
```
