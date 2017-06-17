const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('../user/schema');

const moviesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  duration: {
    type: Number
  },
  _user: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Movies', moviesSchema);
