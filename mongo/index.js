var express = require("express");
const MongoHandler = require("./mongohandler");
const mongoHandler = new MongoHandler();

var app = express();

app.post("/", function(req, res) {
  var answer = req.body.answer;
  var questionId = req.body.questionId;

  mongoHandler.makeAnswer(answer, questionId);
});

app.get("/api/questions/:id", function(req, res) {
  var questionID = req.params.id;

  res.send({ counts: mongoHandler.getCounts(questionID) });
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
