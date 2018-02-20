'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema(
  {
  games: [{
    id: Number,
    name: String,
    summary: String,
    trailer: String,
    site: String,
    image: String
  }]
}, { collection: 'gameslist' });

module.exports = mongoose.model('Games', GameSchema);
