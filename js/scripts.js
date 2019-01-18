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

    if (answer !== 'yes') {
      alert("Select yes when you are ready");
    }
    else if (size === 'large' && development !== 'front' && build === 'database' && scripts === 'newer') {
      $("#language").after("C#" + "<br><img src='img/csharp.png' alt='The C# icon'>");
      $("#quiz").hide();
    }
    else if (size === 'large' && development !== 'front' && build === 'web' && scripts === 'newer') {
      $("#language").after("Java" + "<br><img src='img/java.png' alt='The Java icon'>");
    }
    else if (size === 'small' && development !== 'front' && build === 'web' && scripts === 'newer') {
      $("#language").after("PHP" + "<br><img src='img/php.png' alt='The PHP icon'>");
    }
    else if (development !== 'front' && scripts === 'older') {
      $("#language").after("Ruby" + "<br><img src='img/ruby.png' alt='The Ruby icon'>");
    }
    else {
      $("#language").after("CSS" + "<br><img src='img/css.png' alt='The CSS icon'>");
    }
    event.preventDefault();
  });

});
// function pickColor() {
//   $("#colorpicker").click(function(){
//     $("button#btn").css("background-color",$("#colorpicker").val());
//   });
// }
