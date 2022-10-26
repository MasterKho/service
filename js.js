$(document).ready(function() {
  $(".container").click(function() {
    if ($("#more").is(":hidden")) {
      $("#more").slideDown("fast");
    } else {
      $("#more").hide();
    }
  });
});

 