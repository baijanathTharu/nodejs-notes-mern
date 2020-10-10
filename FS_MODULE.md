# fs

## Writing to file

```js
const fs = require("fs");

// first argument: pathName
// second argument: content to be written
// third argument: callback
fs.writeFile("./files/new.txt", "Hello World!", function (err, done) {
  if (err) {
    console.log("Error while writing: ", err);
  } else {
    console.log("Writing done: ", done);
  }
});
```

## Reading from file

```js
const fs = require("fs");

// first argument: pathName
// second argument: encoding
// third argument: callback
fs.readFile("./files/new.txt", "utf8", function (err, done) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("File content: ", done);
  }
});
```

> Disadvantage of above two methods: The file has to be loaded to the memory to start reading and writing. This can be overcomed by using stream to read and write as below.

## Streams

- Writable stream: write data to stream.
- Readable stream: read data from stream.
- Duplex: read from stream and write to stream.

## Reading File with streams

```js
const fs = require("fs");

// first argument: pathName of the file to read
// second argument: encoding type
const readStream = fs.createReadStream("./files/new.txt", "utf8");

// We have a 'data' event on the stream which is triggered
// whenever there is data in the buffer
// which is recevied as chunk in the callback.
readStream.on("data", function (chunk) {
  console.log(chunk);
});
```

## Writing to file with streams

```js
const fs = require("fs");

// first argument: pathName of file where to write
const writeStream = fs.createWriteStream("./files/new.txt");
// now we can start writing
// first argument: content to be written
writeStream.write("I am writing this to the file with streams");
```

## Reading from a file and writing to another file

```js
const fs = require("fs");

// creating read stream
const newReadStream = fs.createReadStream("./files/readme.txt", "utf8");

// creating write stream
const newWriteStream = fs.createWriteStream("./files/writeme.txt");

newReadStream.on("data", function (chunk) {
  // writing the data from readme to writeme
  newWriteStream.write(chunk);
  console.log("Read from readme.txt and written to writeme.txt");
});
```
