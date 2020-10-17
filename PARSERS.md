# Parsers

- Make checkAdmin application level middleware that checks if someone is an admin.
- If he is admin, let him pass to the dashboard
- otherwise show error message.

## checkAdmin middleware

```js
module.exports = function (req, res, next) {
  if (req.body === true) {
    res.render("admin-dashboard");
  } else {
    next({
      msg: "You do not have permissions.",
      status: 403,
    });
  }
};
```

## Using middlewares in any route

- We can use the **checkAdmin** middleware in many routes as below:

```js
app.use("/users", checkAdmin, userRouter);
app.use("/comment", userRouter); // checkAdmin middleware not used
app.use("/reviews", checkAdmin, userRouter);
```

- If we go to /users endpoint, the checkAdmin checks if we are admin are not.
- This information is passed through the query parameters of the url.
- However, the server needs to have a parser for respective type of data sent to it.
- for example:
  - express.json() for parsing json data
  - express.urlencoded() for x-www-formurlencoded

## Parsers add **body** property to the request

```js
app.use(express.json()); // json parser
app.use(express.urlencoded()); // x-www-formurlencoded
```
