var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  Noun1: {
    type: String
  },
  Noun2: {
    type: String
  },
  Noun3: {
    type: String
  },
  Adj1: {
    type: String
  },
  Adj2: {
    type: String
  },
  Adj3: {
    type: String
  },
  Adv1: {
    type: String
  },
  Adv2: {
    type: String
  },
  Adv3: {
    type: String
  },
  Prep1: {
    type: String
  },
  Prep2: {
    type: String
  },
  Prep3: {
    type: String
  },
  Verb1: {
    type: String
  },
  Verb2: {
    type: String
  },
  Verb3: {
      type: String
  }
},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);