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

- For all requests from the client, we have only one handler and the server can respond with only one message to all the request.

## request Object

- req.url: gives us the requested url
- By checking the url of the request, the server can respond with different messages.

```js
const server = http.createServer(function (req, res) {
  if (req.url === "/hello") {
    res.end("Hello from the server.");
  }
  if (req.url === "/signup") {
    res.end("Please fill the form");
  }
  if (req.url === "/login") {
    res.end("You cannot login.");
  }
  res.end("Your requested url is not on the server.");
});
```

- This single handler becomes hard to maintain and becomes lengthy when the number of url becomes more so we need some framework like **express**.
