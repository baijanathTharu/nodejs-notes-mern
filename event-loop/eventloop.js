const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

// set up thread pool size to one
process.env.UV_THREADPOOL_SIZE = 1;

// time expired callbacks
setTimeout(() => {
  console.log("NOT IN EVENT LOOP: timer 1 finished");
}, 0);

// set immediate callbacks
setImmediate(() => {
  console.log("NOT IN EVENT LOOP: Immediate one finished");
});

// I/O operation

fs.readFile("test.txt", (err, data) => {
  console.log("IN EVENTlOOP: I/O finished");
  console.log("--------------");

  setTimeout(() => {
    console.log("IN EVENTlOOP: timer 2 finished");
  }, 0);

  setTimeout(() => {
    console.log("IN EVENTlOOP: timer 3 finished");
  }, 3000);

  // setImmediate execute once every tick
  setImmediate(() => {
    console.log("IN EVENTlOOP: Immediate two finished");
  });

  // next tick: gets executed immediately
  process.nextTick(() => {
    console.log("Process.nextTick");
  });

  // heavy task offloading
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password encryption took: ", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password encryption took: ", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password encryption took: ", Date.now() - start);
  });
});

// a top level code
console.log("Hello from top level code");
