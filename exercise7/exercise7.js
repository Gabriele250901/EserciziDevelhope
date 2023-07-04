const fs = require("fs");

fs.writeFile("./exercise7.txt", "Prova Scrittura", (err) => {
  if (err) {
    console.error(err);
  } else console.log("Andato in porto");
});