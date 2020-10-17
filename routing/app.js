const express = require("express");
const { fileURLToPath } = require("url");

// creating an express app
const app = express();

// import controllers
const authRouter = require("./controllers/auth.controller");
const userRouter = require("./controllers/user.controller");

// some routes that can be visited without authentication
// route for sign up
app.get("/signup", function (req, res, next) {
  res.json({
    msg: "Hello from signup",
  });
});

// route for login
app.get("/login", function (req, res, next) {
  res.json({
    msg: "Hello from login",
  });
});

// routes for authenticated user
// need some middlewares: such middlewares are called routing level middleware
app.use("/auth", authRouter);

// Routes below this cannot be accessed without passing in the above middleware
// so the order of middlewares is important.
app.get("/users/:username", function (req, res) {
  if (req.params.username === "shyam") {
    res.json({ msg: "Hello " + req.params.username });
  } else {
    res.json({ msg: "You are not authenticated user..." });
  }
});

// middlewares for different operations
app.use("/user", userRouter);
app.use("/comment", userRouter);
app.use("/notifications", userRouter);
app.use("/photos", userRouter);

// application level middleware for handling 404 error
app.use(function (req, res, next) {
  res.json({
    status: 404,
    msg: "Not found",
  });
});

// listening
app.listen("3000", function (err) {
  if (err) {
    console.log("Listening failed...");
  } else {
    console.log("Listening on port 3000");
  }
});
