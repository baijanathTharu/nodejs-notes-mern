# Express

## Introduction

- Web framework for Nodejs
- Make robust API easily with lots of middlewares.

## Express App

- Create an instance of express to make an express app.

```js
const express = require('express);
const app = express();
```

---

## Creating routes

### Static Routes

```js
app.get("/login", function (req, res) {
  res.json({
    msg: "Response from login",
  });
});

app.get("/signup", function (req, res) {
  res.json({
    msg: "Response from signup",
  });
});
```

### Dynamic routes

- Dynamic routes can be made using a colon before the endpoint.
- Dynamic value can be obtained in **request** object with:
  > req.params

```js
app.get("/users/:id", function (req, res) {
  res.json({
    msg: "From users dynamci uri",
    params: req.params,
    id: req.params.id,
  });
});
```

---

## Passing Data in get method using Query

> localhost:3000/users?id=1&name=ram

- Queries are inserted in the URL after a question mark.
- Two queries can be separated with '**&**'.
- **Request** object has this queries.

```js
app.get("/users?id=12&name=ram", function (req, res) {
  res.json({
    msg: "From queries",
    queries: req.query, // { id: 12, name: 'ram'}
  });
});
```

## Important methods in **response** object

```js
res.send();
res.end();
res.sendStatus();
res.sendFile();
res.download();
res.json();
```

---

## Express Server

```js
const express = require('express);
const app = express();

// some routes
app.get('/home', function(req, res) {
  res.json({
    msg: 'Response from home'
  });
});
app.get('/about', function(req, res) {
  res.json({
    msg: 'Response from about'
  });
});

app.listen(3000, function(err, done) {
  if(err) {
    console.log(err);
  } else {
    console.log('Server listenting at port 300);
  }
})
```
