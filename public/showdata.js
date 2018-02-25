
var games = [];

$(document).ready(function() {
  getData();
});

// Retrieves data from database
function getData() {
  $.getJSON('/games', function (data) {
    games.push(data.games);
    createColumns();
    expandHandler();
  });
}

// Creates column for every 'game' in database
function createColumns() {
  var col = "";
  for (var i = 0; i < games[0].length; i++) {
    col += "<div class='col-sm-3' id='col" + games[0][i].id + "'>" + createInfo(games[0][i]) + "</div>";
  }
  $("#row").html(col);
  for (var i = 0; i < games[0].length; i++) {
    $("#col"+ games[0][i].id).css("background-image", "url('./images/" + games[0][i].image + "')");
  }
}

// Creates handler to expand default columns
function expandHandler() {
  $(".col-sm-3").click(function() {
    $(this)
      .removeClass("col-sm-3 col-sm-2")
      .addClass("col-sm-6").click(minimizeHandler())
      .siblings()
        .removeClass("col-sm-3 col-sm-6")
        .addClass('col-sm-2');
  });
}

// Creates handler to minimize expanded columns
function minimizeHandler() {
  $(".col-sm-6").click(function() {
    console.log("min");
    $(this)
        .removeClass("col-sm-6")
        .addClass("col-sm-3").click(expandHandler())
        .siblings()
          .removeClass("col-sm-2")
          .addClass("col-sm-3")
    });
}

// Creates list containing basic info about games
function createInfo(game) {
  var info = '<ul class="list-group">'+
    '<li class="list-group-flush"><h1>' + game.name + '</h1></li>'+
    '<li class="list-group-flush">' + game.summary + '</li>'+
    '<li class="list-group-flush"><a href="' + game.trailer + '">' + game.trailer + '</a></li>'+
    '<li class="list-group-flush"><a href="' + game.site + '">' + game.site + '</a></li>'+
    '</ul>';
    return info;
}
