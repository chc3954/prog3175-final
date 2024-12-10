const fs = require("fs");

const DATA_PATH = "./data/people.json";

// load json data
const loadData = () =>
  fs.existsSync(DATA_PATH) ? JSON.parse(fs.readFileSync(DATA_PATH)) : [];

// save json data
const saveData = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data));

module.exports = { loadData, saveData };
