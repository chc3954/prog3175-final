# prog3175-final

Name: Hyunchul Cho (8752831)

Description: A simple RESTful API for managing Person resource.

### Github Repo: https://github.com/chc3954/prog3175-final

## Installation

### Install dependencies:

```
npm install
```

### Start the server:

```
npm start
```

The server will run on http://localhost:3000

## API Endpoints

### Create a new person

- URL: POST /person
- Request body (example):

```
{
  "firstName": "Hyunchul",
  "lastName": "Cho",
  "age": 100
}
```

- Response:

```
{
  "id": 1, // auto increment id
  "firstName": "Hyunchul",
  "lastName": "Cho",
  "age": 100
}
```

### Get all people

- URL: GET /person/all
- Response (example):

```
[
  {
    "id": 1,
    "firstName": "Hyunchul",
    "lastName": "Cho",
    "age": 100
  },
  {
    "id": 2,
    "firstName": "John",
    "lastName": "Doe",
    "age": 20
  }
]
```

### Get a person by id

- URL: GET /person/:id
- Response (id = 2):

```
{
    "id": 2,
    "firstName": "John",
    "lastName": "Doe",
    "age": 20
  }
```

### Update a person by id

- URL: PUT /person/:id
- Request body (id = 1):

```
{
  "firstName": "Hyunchul",
  "lastName": "Cho",
  "age": 20
}
```

- Response:

```
{
  "firstName": "Hyunchul",
  "lastName": "Cho",
  "age": 20
}
```

### Delete a person by id

- URL: DELETE /person/:id
