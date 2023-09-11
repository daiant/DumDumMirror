const fs = require("fs");
const path = require("path");

function writeFile(json) {
  const json_path = path.join(process.cwd(), 'todo', 'todo.db.json');
  fs.writeFileSync(json_path, json);
}

function getFile() {
  const json_path = path.join(process.cwd(), 'todo', 'todo.db.json');
  const buffer = fs.readFileSync(json_path);
  return JSON.parse(buffer);
}

module.exports = {
  writeFile,
  getFile,
}
