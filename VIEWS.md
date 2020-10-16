# Views

## Introduction

- Express is a independent web framework so it has views functionality as well.
- We need to use templating engines for views.
- By using templating engine, we can display data from controller to our view in runtime.
- examples: ejs, pug

## Memory in express

```js
// allocating
app.set("port", 8080);
// accessing
app.get("port");
```

## Setting up views

- Install the view engine.

```js
const pug = require("pug");
// setting view engine
app.set("view engine", pug);
// setting up the folder for views
app.use("views", path.join(__dirname, "views"));
```

## Pug

- Make a file in views directory and name it **index.pug**.

```pug
html
  head
    title
  body.container
    p Welcome to express
    p=msg
    form(method='POST').form-group
      label(for='name')
      input(type='text', name='username').form-control
      label(for='password')
      input(type='password', name='password').form-control
      input(type='submit', value='login').btn.btn-primary
    p Don't have an Account?
    span register
      a(href='/register') here
```

- **index.pug** can be rendered in any route with some data passed through it.

```js
app.use("/home", function (req, res, next) {
  res.render("index.js", {
    title: "Home",
    msg: "This is homepage",
  });
});
```
