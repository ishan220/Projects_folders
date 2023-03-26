const exp = require("express");
const app = exp();
app.listen(8000, function () {
  console.log("Server has Started");
});
app.get("/", function (request, response) {
  response.send(
    "<h2>Hi! there thanks for visiting my website.......11th change</h2>"
  );
});
app.get("/Ishan", function (request, response) {
  response.send("<h1>This is my Intro Page</h1>");
});
