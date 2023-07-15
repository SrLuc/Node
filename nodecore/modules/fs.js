const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "/novapasta"), (err) => {
  if (err) {
    return console.log(err);
  }
});

fs.writeFile(
  path.join(__dirname, "/novapasta", "teste.js"),
  "console.log('hello world')",
  (err) => {
    if (err) {
      return console.log(err);
    }
  }
);

fs.appendFile(
  path.join(__dirname, "/novapasta", "teste.js"),
  "console.log('TESTE')",
  (err) => {
    if (err) {
      return console.log(err);
    }
  }
);
