// server/index.js
const todo_json = require('./todo/todo.db.json');
const express = require("express");
const cors = require("cors");
const { writeFile, getFile } = require('./todo/utils');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/todo', (req, res) => {
  res.json(getFile());
});

app.post("/todo", bodyParser.text(), (req, res) => {
  const body = req.body;
  writeFile(body);
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});