# Error Handling Middleware

## Introduction

- If we give four parameters to an application level middleware, it is called error handling middleware.
- for example:

```js
app.use(function (err, req, res, next) {
  // err => for error
  // req => for request
  // res => for response
  // next => for next middleware function
  res.json({
    test: "From error handling middleware",
    msg: err.msg || err,
    status: err.status || 400,
  });
});
```

## Executing Error Handling Middleware

- We have to call error handling middleware like any simple function from the routes above it with **next** middleware function.

```js
app.use(function (req, res, next) {
  // next function with argument
  next({ msg: "not found", status: 404 });
});

app.use(function (err, req, res, next) {
  res.json({
    test: "From error handling middleware",
    msg: err.msg || err,
    status: err.status || 400,
  });
});
```
