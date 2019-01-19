$(document).ready(function() {

  pickColor();
  function pickColor() {
    $("#colorpicker").click(function(){
      $("button#btn").css("background-color",$("#colorpicker").val());
    });
  }





  $("form#quiz").submit(function(event) {

    var name = $("#name").val();
    var build = $("input:radio[name=build]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var answer = $("input:radio[name=answer]:checked").val();
    var scripts = $("input:radio[name=scripts]:checked").val();

    if (0 === name.length) {
      alert("Please enter your name");
    }
    else {
      alert("Welcome to the Quiz " + name)
    }

    if (answer === 'no') {
      alert("Select yes when you are ready");
    }
    else if (development === 'back' && scripts === 'older') {
      $("#language").after("PHP");
      $("#csharp").hide();
      $("#css").hide();
      $("#java").hide();
      $("#php").show();
      $("#ruby").hide();
    }
    else if (build === 'database' && development === 'back' && scripts === 'newer') {
      $("#language").after("C#");
      $("#csharp").show();
      $("#css").hide();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    else if (build === 'web' && development === 'back' && scripts === 'newer') {
      $("#language").after("Java");
      $("#csharp").hide();
      $("#css").hide();
      $("#java").show();
      $("#php").hide();
      $("#ruby").hide();

    }
    else if (size === 'small' && development === 'back' && scripts === 'newer') {
      $("#language").after("Ruby");
      $("#csharp").hide();
      $("#css").hide();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").show();
    }
    else {
      $("#language").after("CSS");
      $("#csharp").hide();
      $("#css").show();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
    }

    event.preventDefault();
  });

});
// function pickColor() {
//   $("#colorpicker").click(function(){
//     $("button#btn").css("background-color",$("#colorpicker").val());
//   });
// }
