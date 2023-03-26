console.log("Hi there how are you");
const fs = require("fs");
fs.readFile("hello.txt", "utf-8", function (error, data) {
  if (error) console.log("error in importing the file");
  else console.log(data);
});
