const fs = require("fs");

const readdir = (...args) => {
  return new Promise((resolve, reject) => {
    fs.readdir(...args, (error, data) => {
      if (error) return reject(err);
      resolve(data);
    });
  });
};
readdir(".")
  .then((fileNames) => console.log(fileNames.join(", ")))
  .catch(console.error);
