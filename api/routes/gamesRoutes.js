'use strict';
module.exports = function(app) {
  var gamesList = require('../controllers/gamesController');

  // todoList Routes
  app.route('/games')
    .get(gamesList.list_all_games);
    //.post(todoList.create_a_task);


  app.route('/games/:gameId')
    .get(gamesList.read_a_game);
    //.put(todoList.update_a_task)
    //.delete(todoList.delete_a_task);
};
