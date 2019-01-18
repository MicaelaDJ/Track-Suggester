$(document).ready(function() {

  $(function() {
	//bg color selector
  $(".color").click(function(){
		var color = $(this).attr("data-value");
    $("body").css("background-color", color);
	});

  //add color picker if supported
  if (Modernizr.inputtypes.color) {
    $(".picker").css("display", 'inline-block');
    var c = document.getElementById('colorpicker');
    c.addEventListener('change', function(e) {
      //d.innerHTML = c.value;
      var color = c.value;
      $("body").css("background-color", color);
		}, false);
  }
});
function pickColor() {
  $("#colorpicker").click();
}



  $('#color').form-control ({
    onChange: function(hsb, hex, rgb) {
      $("#btn").css("color", '#' + hex);
    }
  });
  $("form#quiz").submit(function(event) {
    var name = $("#your-name").val();

    var favoriteColor = $("#color").val();

    var build = $("input:radio[name=build]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var answer = $("input:radio[name=answer]:checked").val();
    var scripts = $("input:radio[name=scripts]:checked").val();

    if (answer !== 'yes') {
      alert("Select yes when you are ready");
    }

    else if (size === 'large' && development !== 'front' && build === 'database' && scripts === 'newer') {
      $("#language").after("C#" + "<br><img src='img/csharp.png' alt='The C# icon'>");
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
