const { response, request } = require("express");
const exp = require("express");
const app = exp();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(4000, function () {
  console.log("server starting for calculator project");
});
app.get("/index", function (request, response) {
  response.sendFile(__dirname + "/index.html");
  // response.sendFile("/index.html");
});

app.post("/calculated_res", function (request, response) {
  console.log(request.body.num1);
  console.log(request.body.num2);
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var res = num1 + num2;
  response.send("The calaculated result is :" + res);
});
