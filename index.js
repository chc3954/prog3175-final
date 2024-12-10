const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const Person = require("./models/person");
const { loadData, saveData } = require("./data/data");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// create a new person
app.post("/person", (req, res) => {
  // create a new person object from the request body
  const newPerson = new Person(req.body);
  // load the data from the file
  const data = loadData();

  // add the new person to the data
  data.push(newPerson);
  saveData(data);

  // send the new person as a response
  res.status(201).json(newPerson);
});

// get all people
app.get("/person/all", (req, res) => {
  // load the data from the file
  const data = loadData();
  // send the data as a response
  res.json(data);
});

// get a person by id
app.get("/person/:id", (req, res) => {
  // load the data from the file
  const data = loadData();
  // find the person with the given id
  const person = data.find((person) => person.id === parseInt(req.params.id));
  // send the person as a response
  res.json(person);
});

// update a person by id
app.put("/person/:id", (req, res) => {
  // load the data from the file
  const data = loadData();
  // find the person with the given id
  const person = data.find((person) => person.id === parseInt(req.params.id));
  // update the person with the new data
  Object.assign(person, req.body);
  saveData(data);

  // send the updated person as a response
  res.json(person);
});

// delete a person by id
app.delete("/person/:id", (req, res) => {
  // load the data from the file
  const data = loadData();
  // find the person with the given id
  const personIndex = data.findIndex(
    (person) => person.id === parseInt(req.params.id)
  );
  // remove the person from the data
  data.splice(personIndex, 1);
  saveData(data);

  // send a success response
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
