$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $("#iPhone").click(function(){
    $("#iPhone").css("z-index", 10);
    $("#android").css("z-index", 9);
  });

  $("#android").click(function(){
    $("#android").css("z-index", 10);
    $("#iPhone").css("z-index", 9);
  });
