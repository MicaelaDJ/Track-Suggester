$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var name = $("#your-name").val();

    var favoriteColor = $("#color").val();

    var build = $("input:radio[name=build]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var answer = $("input:radio[name=answer]:checked").val();

    if (answer !== 'yes') {
      alert("Select yes when you are ready");
    }
    
    else if (size === 'large' && development === 'back' && answer === 'yes' && build === 'internal') {
      $("#language").after('C#' + '<br><img src="img/c#.png" alt="The C# icon">');
    }
    else if (size === 'large' && development === 'back' && answer === 'yes' && build === 'apps') {
      $("#language").after("Java" + "<br><img src='img/java.png' alt='The Java icon'>");
    }
    else if (size === 'small' && development === 'back' && answer === 'yes' && build === 'websites') {
      $("#language").after("PHP" + "<br><img src='img/php.png' alt='The PHP icon'>");
    }
    else if (size === 'small' && development === 'back' && answer === 'no' && build === 'web-apps') {
      $("#language").after("Ruby" + "<br><img src='img/ruby.png' alt='The Ruby icon'>");
    }
    else {
      $("#language").after("CSS" + "<br><img src='img/css.png' alt='The CSS icon'>");
    }
    event.preventDefault();
  });

});
