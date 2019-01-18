$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var name = $("#your-name").val();

    var favoriteColor = $("#color").val();

    var build = $("input:radio[name=build]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var answer = $("input:radio[name=answer]:checked").val();

    if (answer === "yes"){
      $("#show").toggle(function() {
        $("p").show();
    })
    else {
      $("hide").toggle(function() {
        $("p").hide();
      })
    }

      })

      alert("Please enter your name");
  });

});
