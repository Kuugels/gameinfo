'use strict';

var mongoose = require('mongoose'),
  Game = mongoose.model('Games');

exports.list_all_games = function(req, res) {
  Game.find({}, function(err, game) {
    if (err)
      res.send(err);
    res.json(game[0]);
  });
};

exports.read_a_game = function(req, res) {
  Game.find({}, function(err, game) {
    if (err) {
      res.send(err);
    }
    for (var i = 0; i < game[0].games.length; i++) {
      if(game[0].games[i].name.toLowerCase() == req.params.gameName) {
        res.json(game[0].games[i]);
      }
    }
  });
};

/*
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
*/



/*
exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

*/
