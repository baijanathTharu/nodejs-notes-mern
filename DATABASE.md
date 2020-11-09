# Databases

## Introduction

- Database is a container for storing data.
- Database operations: CRUD (create, read, updatem, delete)

## Database Management System

- A software for manipulating, retrieving and managing data in a database is called database management system.
- Two Types of DMS:

1. Relational (RDBMS)
2. Distributed (DDBMS)

### RDBMS

- **ER diagrams**: Entity relationship diagram. Expressing the relation between different entities in a diagram.
- Contain tables and data inside table is a row or tuple.
- Schema based design: rule for each data
- Only schemes defined in the schema can be stored so it is not flexible.
- E.g. mySql, sqqLite, msSql

### DDBMS

- Collection based approach. (collection ==> table)
- document is a single record inside collection. (document ==> tuple or row)
- Relation doesnot exist.
- NoSql(not only structured query language)
- E.g. mongodb, couchdb, dynamodb, redis

## Mongodb

- Mongodb id: hex code with timestamp value

* show databases
  > show dbs
* using database
  > use testdb
* show collections in a database
  > show collections
* insert a document in a collection
  > db.users.insert({ name: 'John', profession: 'web developer'})
* find documents in a collection
  > db.users.find({})
* Dropping database
  > db.dropDatabase()
* Mongodb official driver can be used to perform database operations with express. But Schema cannot be made.

## Mongoose

- Mongoose is an ODM(Object Document Modelling) for nodejs to use mongodb.
- Advantages:
  - Schema based solutino
  - Data type
  - Has own methods for querying database
  - middlewares
  - indexing is easy

## Modelling Database

- Predefined data sets
  - username, password, email, dob, university etc
- Generated database
  - Data that are fetched later on
- Need of these data
  - Homepage, Userpage, mobile app
- Filter per query(queries are expensive)
  - demographic, geographic filtering
- How many queries are fired?
  - fire less query
- How often will you change the data?
