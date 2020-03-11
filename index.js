var express = require("express");
var cors = require("cors");
var fs = require("fs");
const https = require("https");

var privateKey = fs.readFileSync("sslcert/server.key");
var certificate = fs.readFileSync("sslcert/server.crt");
var credentials = { key: privateKey, cert: certificate };

const bodyParser = require("body-parser");
const MongoHandler = require("./mongo/mongohandler");
const mongoHandler = new MongoHandler();

// var app = express(credentials);
var app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use(forceSsl);

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

app.get("/", function(req, res) {
  res.send("Hello World");
});

var server = https.createServer(
  {
    key: fs.readFileSync("./sslcert/server.key"),
    cert: fs.readFileSync("./sslcert/server.crt")
  },
  app
);

app.listen(3000, function() {
  console.log("listening on port 3000");
});
