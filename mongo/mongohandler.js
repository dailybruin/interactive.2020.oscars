const mongoose = require("mongoose");
const Question = require("./schemas/question");
const Answer = require("./schemas/answer");

class MongoHandler {
  constructor() {
    this.client = mongoose.createConnection(
      "mongodb://root:external1@ds139037.mlab.com:39037/oscars2020",
      { useNewUrlParser: true }
    );
    this.QuestionMapping = this.client.model("questions", Question);
    this.AnswerMapping = this.client.model("answers", Answer);
  }

  async makeAnswer(answer, questionId) {
    const currQuestion = await this.QuestionMapping.findOneAndUpdate(
      {
        question_id: questionId
      },
      { $setOnInsert: { question_id: questionId } },
      { upsert: true, new: true }
    );

    const Answer = await this.AnswerMapping.findOneAndUpdate(
      {
        question: currQuestion._id,
        text: answer
      },
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );

    await this.QuestionMapping.findByIdAndUpdate(currQuestion._id, {
      $addToSet: { answers: Answer._id }
    });
  }

  async getCounts(questionId) {
    var counts = {};
    const Question = await this.QuestionMapping.findOne({
      question_id: questionId
    });

    for (var answerID in Question.answers) {
      var currAnswer = await this.AnswerMapping.findById(answerID);
      counts[currAnswer.text] = currAnswer.count;
    }

    return counts;
  }

  close() {
    this.client.close();
  }
}

module.exports = MongoHandler;
