const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Questions" },
  text: { type: String, required: true },
  count: { type: Number, default: 0 }
});

module.exports = AnswerSchema;
