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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
