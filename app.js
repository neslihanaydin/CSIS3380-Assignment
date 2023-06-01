
var express = require("express");
const bodyParser = require("body-parser");

var app = express();
const port = 3000;
app.use(express.static(__dirname + "/"));

app.set("view engine", "ejs"); 
app.set("views", "views"); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
  res.render("bmi", {
    result: "", 
  });
});

app.post("/", function (req, res) {
  const age = req.body.age;
  const weight = req.body.weight;
  const height = req.body.height;

  let result = (weight / Math.pow(height/100, 2)).toFixed(2);
  
  if(isNaN(result)){
    result = "Invalid input.";
  } else {
    result = "Your BMI Result is: " + result;
  }

  res.render("bmi", {
    result: result, 
    age: age,
    weight: weight,
    height: height
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port number : ${port}`);
});
