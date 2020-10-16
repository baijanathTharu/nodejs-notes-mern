# Inbuilt Middleware

## Introduction

- Middlewares that exist in the express itself are called inbuilt middlewares.

### Middleware for serving files

```js
// serving files folder for internal usage
app.use(express.static('files));

// serving files for external usage
// /file is the end point
app.use('/file', express.static(files));
```

### Path Keywords

1. \_\_dirName

- It gives the directory path of the current file

2. process.cwd()

- It gives the root directory path

### Path module

```js
const path = require('path);

// e.g. Assumce root directory is server
// so we get server/files
app.use('/file', express.static(path.join(__dirName, 'files')));
```
