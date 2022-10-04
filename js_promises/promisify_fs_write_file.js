const fs = require("fs");

function writeFile(filename, contents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, contents, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

writeFile("file.txt", "The contents of my file")
  .then(function () {
    console.log("File write complete!");
  })
  .catch(function (error) {
    console.error(error);
  });
