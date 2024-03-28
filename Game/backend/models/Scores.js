const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  name: String,
  score: Number });

const ScoreModel = mongoose.model("Score", scoreSchema);

module.exports = ScoreModel;