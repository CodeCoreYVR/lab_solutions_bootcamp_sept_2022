const fs = require("fs");
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
function readdir(...args) {
  return new Promise((resolve, reject) => {
    fs.readdir(...args, (error, data) => {
      if (error) return reject(err);
      resolve(data);
    });
  });
}
function writeFile(filename, contents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, contents, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}
const pathToDir = ".";

readdir(pathToDir)
  .then((fileNames) =>
    Promise.all(
      fileNames.map((fileName) => readFile(`${pathToDir}/${fileName}`, "utf8"))
    )
  )
  .then((filesContents) => writeFile("file.txt", filesContents.join("\n")))
  .then(() => console.log("Wrote to file: file.txt"))
  .catch(console.error);
