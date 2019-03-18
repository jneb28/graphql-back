const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  wins: {
    type: Number,
    required: true
  },
  losses: {
    type: Number,
    required: true
  },
  race: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Player', PlayerSchema);