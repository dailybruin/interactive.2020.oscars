var express = require("express");
var cors = require("cors");

const bodyParser = require("body-parser");
const MongoHandler = require("./mongo/mongohandler");
const mongoHandler = new MongoHandler();

var app = express();
app.use(bodyParser.json()).use(cors());

app.post("/api/sendanswer", function(req, res) {
  var answer = req.body.answer;
  var questionId = req.body.questionId;

  mongoHandler.makeAnswer(answer, questionId);

  res.send({ message: "Received" });
});

app.get("/api/questions/:id", function(req, res) {
  var questionID = req.params.id;

  mongoHandler
    .getCounts(questionID)
    .then(response => res.send({ counts: response }));
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
