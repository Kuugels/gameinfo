
$(document).ready(function() {
  createColumns();
  createClickHandlers();

});

function createColumns() {
  var col = "";
  for (var i = 1; i < 5; i++) {
    col += "<div class='col-sm-3 column' id='col" + i + "'></div>";
  }
  $("#row").html(col);
  for (var i = 1; i < 5; i++) {
    $("#col"+i).css("background-image", "url('./images/img" + i + ".jpg')");
  }
}

function createClickHandlers() {
  $(".col-sm-3").click(function() {
    $(this)
      .removeClass("col-sm-3 col-sm-2")
      .addClass("col-sm-6")
      .siblings()
        .removeClass("col-sm-3 col-sm-6")
        .addClass('col-sm-2');
  });
}
