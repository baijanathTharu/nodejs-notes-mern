# API and RESTFUL API Design

## API

- Application Programming Interface is a software that can be used by another piece of software, to allow applications to talk to eachother.
- Web APIs: Database => JSON Data => API => {Browser, android, ios}

## REST Architecture

- Representational State Transfer is a way of building API that can be consumed easily.
- Principles of REST:

  - Separate API into logical resources
  - Expose structured resource-based URls
  - Use HTTP methods(get, post, patch, delete etc)
  - Send data as JSON
  - Be stateless

- **Resource**: Object or representation of something which has data associated to it. Any information that can be named can be a resource. E.g. tours, users, reviews etc
- **Structured URL**: https://www.someapiurl.com/:endpoints
- **HTTP methods and End points**:
  - /addNewTour: POST => /tours
  - /getAllTours: GET => /tours
  - /getSingleTour: GET => /tours/:id
  - /updateTour: PUT => /tours/:id or PATCH => /tours/:id
    > put: send the entire updated object and patch: send only the part of the object that is updated
  - /deleteTour: DELETE => /tours/:id
  - /getToursByUser: GET => /users/:id/tours
  - /deleteToursByUser: DELETE => /users/:u_id/tours/:t_id
- **JSON**:
  - JavaScript Object Notation(JSON) contains key value pair. All keys must be strings on the contrary to JavaScript object.
  - Before sending JSON, add status, and add new key 'data' which holds the data to be sent. This is called enveloping.
- \*\*Stateless RESTful API:
  - All state is handled on the client.
  - Each request must contain all the informations necessary to process it.
  - The server should not have to remember previous requests to process current request.
  - Example: isLoggedIN, currentPage etc are states must be handled in the client and must be sent by the client in each request to the server.
