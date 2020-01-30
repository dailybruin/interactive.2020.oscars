const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question_id: { type: Number, required: true, unique: true },
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answers" }]
});

module.exports = QuestionSchema;
