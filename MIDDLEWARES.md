# Middlewares

## Introduction

- Middlewares are functions that have access to http request, http response object and next middleware function reference.
- They can access and modify req and res object.
- They come into action in between request and response cycle.
- The order of middlewares is very important.

## Syntax

```js
function(req, res, next) {
// req = request object
// res = response object
// next = next middleware function
}
```

## How to use middlewares in express app?

> app.use(middlewareFunction);

```js
// create express app
const express = require(express);
const app = express();

// using a middleware
app.use(function (req, res, next) {
  res.json({
    msg: "I am a middleware",
  });
});

app.listen(3000, function () {
  console.log("Listening on port 300");
});
```

## Types of Middlewares

1. Application Level Middleware
2. Third Party Middleware
3. [Routing Level Middleware](https://github.com/baijanathTharu/nodejs-notes-mern/blob/master/ROUTING.md)
4. [Error Handling Middleware](https://github.com/baijanathTharu/nodejs-notes-mern/blob/master/ERROR_HANDLING.md)
5. [Inbuilt Middleware](https://github.com/baijanathTharu/nodejs-notes-mern/blob/master/INBUILT.md)

### Application Level Middleware

- A middleware having scope of req, res and next

```js
app.use(function (req, res, next) {
  // adding a property **userName** to request object
  req.userName = "Ram";
  next(); // calling next middleware
});

app.use('/user', function(req, res, next) {
  res.json({
    // userName property in request object can be accessed
    // in this middleware
    name: req.userName;
  })
})
```

### Third Party Middlewares

- Middlewares made by someone else.
- for example morgan, body-parser etc

```js
// morgan can be used to log all the details of the request from a client
const morgan = require("morgan");

app.use(morgan("dev"));
```
